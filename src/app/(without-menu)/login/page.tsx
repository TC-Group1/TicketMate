"use client"

import React, { useState, FC, useRef } from "react"
import { useUserContext } from "../../../features/user/UserContextProvider"
import { UserContextType } from "../../../types"

// Modal additions
import Modal from "@/components/modals/modal"
import RegistrationForm from "../../../components/registration-form"

import {
	emailRegex,
	passwordRegex,
	phoneNumberRegex,
} from "../../../utils/regex"

const LoginPage: FC = () => {
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [userNotification, setUserNotification] = useState<string>("")
	const [registrationModalOpen, setRegistrationModalOpen] = useState(false)
	const [error, setError] = useState<boolean>(false)

	const showErrorRef = useRef<boolean>(false)

	const userContext: UserContextType | null = useUserContext()

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value)
		setError(false)
		showErrorRef.current = false
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
		setError(false)
		showErrorRef.current = false
	}

	function handleSubmit(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault()

		if (username === "" || password === "") {
			setUserNotification("Please enter a username and password")
			setError(true)
			showErrorRef.current = true
			return
		}

		if (username && password) {
			let usernameUpdate = username // Necessary to remove special characters from phone number

			if (!username.includes("@")) {
				const stripSpecialChars = username.replace(/[^+\d]+/g, "")
				usernameUpdate = stripSpecialChars

				if (!phoneNumberRegex.test(stripSpecialChars)) {
					setError(true)
					showErrorRef.current = true
					setUserNotification("Invalid phone number input")
					return
				}
			} else if (username.includes("@")) {
				if (!emailRegex.test(username)) {
					setError(true)
					showErrorRef.current = true
					setUserNotification("Invalid email input.")
					return
				}
			}

			if (!passwordRegex.test(password)) {
				setError(true)
				showErrorRef.current = true
				setUserNotification("Password does not meet the required criteria.")
				return
			}

			userContext?.useLoginSubmission(usernameUpdate, password)
			console.log("Trying to login")
		}
	}

	return (
		<div className="grid place-items-center bg-bg-primary text-center h-screen">
			<div className="w-[330px] p-[40px_30px] bg-login-background rounded-[10px] shadow-neumorphism">
				<div className="text-text-lg font-semibold mb-[35px] text-gray-dark">
					Ticketmate Login
				</div>
				<form>
					<div className="relative flex h-field-height w-full">
						{username.length > 0 && (
							<label className="absolute top-1/2 -translate-y-[150%] left-[10px] bg-login-background text-field-label-text pointer-events-none">
								Email or Phone
							</label>
						)}
						<input
							type="text"
							name="username"
							value={username}
							onChange={handleUsernameChange}
							placeholder="Email or Phone"
							className={`h-full w-full pl-[10px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
								showErrorRef.current ? "border-error" : ""
							}`}
						/>
						<span className="fas fa-user"></span>
					</div>
					<div className="relative flex h-field-height w-full mt-4">
						{password.length > 0 && (
							<label className="absolute top-1/2 -translate-y-[150%] left-[10px] bg-login-background text-field-label-text pointer-events-none">
								Password
							</label>
						)}
						<input
							type="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							placeholder="Password"
							className={`h-full w-full pl-[10px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
								showErrorRef.current ? "border-error" : ""
							}`}
						/>
						<span className="fas fa-lock"></span>
					</div>
					<div>
						{showErrorRef.current && (
							<p className="text-red-500 text-sm text-left">
								Invalid username or password
							</p>
						)}
					</div>
					<div className="text-left mt-2.5 ml-1.5">
						<a href="#" className="text-light-purple text-base hover:underline">
							Forgot Password?
						</a>
					</div>
					<button
						className="my-4 w-full h-12 text-lg font-semibold bg-light-purple rounded-3xl shadow text-white focus:bg-dark-purple focus:shadow-inner"
						onClick={handleSubmit}
					>
						Sign in
					</button>
				</form>

				<div className="mt-4 text-gray-dark">
					Don&apos;t have an account?
					<button
						id="signup-btn"
						onClick={() => setRegistrationModalOpen(true)}
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
					<div
						className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
						role="alert"
					>
						<h2 className="text-red-700 font-semibold">{userNotification}</h2>
					</div>
				)}
			</div>
			<div>
        {userContext?.error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert"
          >
            <h2 className="text-red-700 font-semibold">{userContext.error}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

        

export default LoginPage
