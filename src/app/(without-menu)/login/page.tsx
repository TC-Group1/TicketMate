"use client"

import React, { useState, FC, useRef } from "react"
import { useUserContext } from "../../../features/user/UserContextProvider"
import { UserContext } from "../../../types"

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

	const userContext: UserContext | null = useUserContext()

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value)
		setError(false);
		showErrorRef.current = false;
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
		setError(false);
		showErrorRef.current = false;
	}

	function handleSubmit(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault()

		if (username === "" || password === "") {
			setUserNotification("Please enter a username and password")
			setError(true);
			showErrorRef.current = true;
      return;
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
        setError(true);
        showErrorRef.current = true;
        setUserNotification("Password does not meet the required criteria.");
        return;
      }

			userContext?.useLoginSubmission(usernameUpdate, password)
			console.log("Trying to login")
		}
	}

	return (
		<div className="grid place-items-center bg-gray-100 text-center h-screen">
			<div className="w-[330px] p-[40px_30px] bg-white rounded-lg shadow-md">
				<div className="text-2xl font-semibold mb-9 text-gray-600">Ticketmate Login</div>
				<form>
					<div className="h-[50px] w-full flex relative mb-5">
          {username.length > 0 && <label className="absolute top-1/2 transform -translate-y-1/2 left-6 bg-white text-gray-500">Email or Phone</label>}
						<input
							type="text"
							name="username"
							value={username}
							onChange={handleUsernameChange}
							placeholder="Email or Phone"
							className={`h-full w-full pl-[45px] outline-none border-none text-lg bg-white text-gray-600 rounded-full shadow-inner ${showErrorRef.current ? 'border-2 border-red-500' : ''}`}
						/>
						<span className="absolute text-gray-600 w-12 leading-[50px] left-0 pl-4">👤</span>
					</div>
					<div className="h-[50px] w-full flex relative mb-5">
						{password.length > 0 && <label>Password</label>}
						<input
							type="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							placeholder="Password"
							className={`h-full w-full pl-[45px] outline-none border-none text-lg bg-white text-gray-600 rounded-full shadow-inner ${showErrorRef.current ? 'border-2 border-red-500' : ''}`}
						/>
						<span className="absolute text-gray-600 w-12 leading-[50px] left-0 pl-4">🔒</span>
					</div>
					<div>
						{showErrorRef.current && (
							 <p className="text-red-500 text-sm text-left mb-5">
               {userNotification}
             </p>
						)}
					</div>
					<div className="text-left mb-5 ml-2">
						<a href="#" className="text-lg text-purple-600 hover:underline">Forgot Password?</a>
					</div>
					<button
						className="my-4 w-full h-12 text-lg font-semibold bg-purple-600 rounded-full shadow text-white hover:bg-purple-700 focus:outline-none"
            onClick={handleSubmit}
					>
						Sign in
					</button>
				</form>

				<div className="my-5 text-gray-600 text-lg">
					Don&apos;t have an account?
					<button
						id="signup-btn"
            className="ml-2 text-purple-600 hover:underline"
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
					<div className="border border-red-500 p-2 rounded-md bg-gray-100">
          <h2 className="text-red-500 text-sm">{userNotification}</h2>
        </div>
				)}
			</div>
			<div>
				{/* null check user context, then check if there's an error.
        If there's an error, render it to the UI */}
				{userContext && userContext.error && (
						<div className="border border-red-500 p-2 rounded-md bg-gray-100">
							<h2 className="text-red-500 text-sm">{userContext.error}</h2>
						</div>
				)}
			</div>
		</div>
	)
}


export default LoginPage
