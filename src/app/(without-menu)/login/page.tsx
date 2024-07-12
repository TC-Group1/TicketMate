"use client"

import React, { useState, FC } from "react"
import { useUserContext } from "../../../features/user/UserContextProvider"
import { UserContext } from "../../../types"

// Modal additions
import Modal from "@/components/modals/modal"
import RegistrationForm, { emailRegex, phoneNumberRegex, passwordRegex } from "../../../components/registration-form" // Import regex patterns

const LoginPage: FC = () => {
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [userNotification, setUserNotification] = useState<string>("")

	const [registrationModalOpen, setRegistrationModalOpen] = useState(false)

	const userContext: UserContext | null = useUserContext()

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value)
		// setError(false)
		// showErrorRef.current = false
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
		// setError(false)
		// showErrorRef.current = false
	}

	function handleSubmit(
		// username: string,
		// password: string
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault()

		if (username === "" || password === "") {
			setUserNotification("Please enter a username and password")
			// setError(true)
			// showErrorRef.current = true
		} else {
			// if (username && password) {
			let usernameUpdate = username // Necessary to remove special characters from phone number

			if (!username.includes("@")) {
				const stripSpecialChars = username.replace(/[^+\d]+/g, "")

				// validate phone number
				if (!phoneNumberRegex.test(stripSpecialChars)) {
					// setError(true)
					// showErrorRef.current = true
					setUserNotification("Invalid phone number input")
					return
				} else {
					usernameUpdate = stripSpecialChars
					//Clear notification on successful submission
					setUserNotification("")
					userContext?.useLoginSubmission(usernameUpdate, password)
					console.log("Trying to login")
				}
			} else if (username.includes("@")) {
				// validate email
				if (!emailRegex.test(username)) {
					// setError(true)
					// showErrorRef.current = true
					setUserNotification("Invalid email input.")
				} else {
					// Clear notification on successful submission
					setUserNotification("")
					userContext?.useLoginSubmission(usernameUpdate, password)
					console.log("Trying to login")
				}
			}

			// clear notification on successful submission
			setUserNotification("")

			userContext?.useLoginSubmission(usernameUpdate, password)
			console.log("Trying to login")
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-primary">
			<div className="w-full max-w-md">
				<div className="text-3xl font-semibold text-gray-700 mb-5">
					Ticketmate Login
				</div>
				<form className="space-y-4">
					<div className="field relative">
						{username.length > 0 && (
							<label className="absolute top-0 left-3 text-gray-500">
								Email or Phone
							</label>
						)}
						<input
							type="text"
							name="username"
							value={username}
							onChange={handleUsernameChange}
							placeholder="Email or Phone"
							className={`input ${userNotification && "border-red-500"}`}
							aria-label="Email or Phone"
						/>
						<span className="fas fa-user"></span>
					</div>
					<div className="field relative">
						{password.length > 0 && (
							<label className="absolute top-0 left-3 text-gray-500">
								Password
							</label>
						)}
						<input
							type="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							placeholder="Password"
							className={`input ${userNotification && "border-red-500"}`}
						/>
						<span className="fas fa-lock"></span>
					</div>
					{userNotification && (
						<div className="text-red-500 text-sm">{userNotification}</div>
					)}
					<div className="forgot-pass">
						<a href="#" className="text-light-purple hover:underline">
							Forgot Password?
						</a>
					</div>
					<button
						className="w-full h-12 text-lg font-semibold bg-light-purple text-white rounded-3xl shadow focus:bg-dark-purple focus:shadow-inner"
						onClick={handleSubmit}
					>
						Sign in
					</button>
				</form>

				<div className="sign-up mt-4">
					Don't have an account?{" "}
					<button
						id="signup-btn"
						onClick={() => setRegistrationModalOpen(true)}
						className="text-light-purple hover:underline"
					>
						Sign up now
					</button>
					<Modal
						children={<RegistrationForm setIsOpen={setRegistrationModalOpen} />}
						isOpen={registrationModalOpen}
						setIsOpen={setRegistrationModalOpen}
					/>
				</div>

				{userNotification && (
					<div className="border-1 border-red-500 p-2 rounded-lg bg-gray-100">
						<h2 className="text-red-500 text-sm">{userNotification}</h2>
					</div>
				)}
			</div>
			<div>
				{/* null check user context, then check if there's an error.
        If there's an error, render it to the UI */}
				{userContext && userContext.error && (
					<div className="border-1 border-red-500 p-2 rounded-lg bg-gray-100 mt-4">
						<h2 className="text-red-500 text-sm">{userContext.error}</h2>
					</div>
				)}
			</div>
		</div>
	)
}

export default LoginPage
