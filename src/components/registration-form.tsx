import React, { useState, useRef, FC, Dispatch, SetStateAction } from "react";
import { RegistrationFormData } from "../types";
import Registration from "@/hooks/auth/register";
import ThreeCanvasWithLogo, { Logo } from "./canvas/Logo";
import { Canvas } from "react-three-fiber";
import { emailRegex, passwordRegex, phoneNumberRegex } from "../utils/regex";


interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const RegistrationForm: FC<Props> = ({ setIsOpen }) => {
	const [formData, setFormData] = useState<RegistrationFormData>({
		email: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		password: "",
	})
	const [confirmPassword, setConfirmPassword] = useState<string>("")

	// State and State References for error handling

	const [emailError, setEmailError] = useState<boolean>(false)
	const emailErrorRef = useRef<boolean>(false)
	const [passwordError, setPasswordError] = useState<boolean>(false)
	const passwordErrorRef = useRef<boolean>(false)
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false)
	const confirmPasswordErrorRef = useRef<boolean>(false)
	const [showPasswordRequirements, setShowPasswordRequirements] =
		useState<boolean>(false)
	const [passwordReqError, setPasswordReqError] = useState<boolean>(false)
	const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false)
	const phoneNumberErrorRef = useRef<boolean>(false)

	const { register } = Registration()

	const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		if (e.target.name === "email") {
			setEmailError(false)
			emailErrorRef.current = false
		}
		if (e.target.name === "phoneNumber") {
			setPhoneNumberError(false)
			phoneNumberErrorRef.current = false
		}
		if (e.target.name === "password") {
			setPasswordError(false)
			passwordErrorRef.current = false
		}
		if (e.target.name === "confirmPassword") {
			setConfirmPasswordError(false)
			confirmPasswordErrorRef.current = false
			setConfirmPassword(e.target.value)
		}

    e.target.name === "confirmPassword"
      ? setConfirmPassword(e.target.value)
      : setFormData({ ...formData, [e.target.name]: e.target.value });
  };


	// ERROR HANDLING FUNCTIONS
	// Input fields

	const emailErrorHandling = () => {
		setEmailError(true)
		emailErrorRef.current = true
	}

	const phoneNumberErrorHandling = (number: string) => {
		if (number !== "") {
			const stripSpecialChars = number.replace(/[^+\d]+/g, "") // Gives user the ability to input their phone number in whatever format

			if (number !== "" && !phoneNumberRegex.test(stripSpecialChars)) {
				setPhoneNumberError(true)
				phoneNumberErrorRef.current = true
			}
		}
	}

	const passwordErrorHandling = () => {
		setShowPasswordRequirements(true)
		setPasswordError(true)
		passwordErrorRef.current = true
		setConfirmPasswordError(true)
	}

	// FORM VALIDATION FUNCTION

	const validateFormInputs = (
		email: string,
		phoneNumber: string,
		password: string,
		confirmPassword: string
	) => {
		// Input field checks

		if (!emailRegex.test(email)) emailErrorHandling()
		if (phoneNumber !== null) phoneNumberErrorHandling(phoneNumber)
		if (password !== confirmPassword) {
			setConfirmPasswordError(true)
			confirmPasswordErrorRef.current = true
		}
		if (!passwordRegex.test(password)) passwordErrorHandling()
	}

	// FORM SUBMISSION FUNCTION

	const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		validateFormInputs(
			formData.email,
			formData.phoneNumber,
			formData.password,
			confirmPassword
		)

		// Error or query handling
		if (
			emailErrorRef.current === true ||
			passwordErrorRef.current === true ||
			confirmPasswordErrorRef.current === true ||
			phoneNumberErrorRef.current === true
		) {
			console.error("Invalid input fields")
			throw new Error("Invalid input fields")
		} else if (
			emailErrorRef.current === false &&
			passwordErrorRef.current === false &&
			confirmPasswordErrorRef.current === false &&
			phoneNumberErrorRef.current === false
		) {
			try {
				await register.mutateAsync(formData) // Does this value need to be returned?
				setIsOpen(false)
			} catch (error) {
				console.error("Error registering new user: ", error)
			}
		}
	}

	return (
		<div
			role="form"
			id="registration-form"
			aria-label="Registration Information"
			className="p-8 bg-login-background rounded-lg shadow-md"
		>
			<h1
				id="TicketMate-registration-form"
				className="text-text-lg font-semibold mb-[35px] text-gray-dark"
				role="heading"
				aria-level={1}
				aria-label="TicketMate Registration"
			>
				TicketMate <br />
				Registration
			</h1>

			<form
				onSubmit={handleFormSubmission}
				name="registration-form"
				method="dialog"
				className="opacity-100"
				aria-labelledby="TicketMate-registration-form"
			>
				<div className="relative flex h-field-height w-full mb-4">
					{formData.email.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="email">
							Email
						</label>
					)}
					<input
						id="email"
						className={`h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
							emailError ? "border-error border-error-byorder" : ""
						}`}
						aria-labelledby="email-label"
						name="email"
						type="email"
						placeholder="Email"
						autoFocus
						value={formData.email}
						onChange={handleInputFieldChange}
						aria-invalid={emailError ? "true" : "false"}
						aria-describedby={emailError ? "email-error" : undefined}
						required
					/>
					{emailError && (
						<p className="text-xs text-red-500 pt-1" id="email-error">
							Email is invalid
						</p>
					)}
					<br />
				</div>

				<div className="relative flex h-field-height w-full mb-4">
					{formData.firstName.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="first-name">
							First Name
						</label>
					)}

					<input
						id="first-name"
						className="h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input"
						aria-labelledby="first-name-label"
						name="firstName"
						type="text"
						placeholder="First Name"
						value={formData.firstName}
						onChange={handleInputFieldChange}
						required
					/>
				</div>

				<div className="relative flex h-field-height w-full mb-4">
					{formData.lastName.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="last-name">
							Last Name
						</label>
					)}
					<input
						id="last-name"
						className="h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input"
						aria-labelledby="last-name-label"
						name="lastName"
						type="text"
						placeholder="Last Name"
						value={formData.lastName}
						onChange={handleInputFieldChange}
						required
					/>
				</div>

				<div className="relative flex h-field-height w-full mb-4">
					{formData.phoneNumber.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="phone-number">
							Phone Number
						</label>
					)}
					<input
						id="phone-number"
						className={`h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
							phoneNumberError ? "border-error border-error-border" : ""
						}`}
						aria-labelledby="phone-number-label"
						name="phoneNumber"
						type="text"
						placeholder="Phone Number"
						maxLength={14}
						value={formData.phoneNumber}
						onChange={handleInputFieldChange}
					/>
					{phoneNumberError && (
						<p className="text-xs text-red-500 pt-1">
							Phone number format is invalid
						</p>
					)}
				</div>
				{showPasswordRequirements && (
					<div className="mb-4 text-xs text-gray-600">
						<ul>
							<li>*At least one uppercase letter</li>
							<li>*At least one lowercase letter</li>
							<li>*At least one digit</li>
							<li>*At least one special character among #?!@$%^&*-</li>
							<li>*A minimum length of 8 characters</li>
						</ul>
					</div>
				)}

				<div className="relative flex h-field-height w-full mb-2">
					{formData.password.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="password">
							Password
						</label>
					)}
					<input
						id="password"
						className={`h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
							passwordError ? "border-error border-error-border" : ""
						}`}
						aria-labelledby="password-label"
						name="password"
						type="password"
						placeholder="Password"
						minLength={8}
						value={formData.password}
						onChange={handleInputFieldChange}
						required
					/>
					{passwordError && (
						<p className="text-xs text-red-500 pt-1">
							Password does not meet requirements
						</p>
					)}
				</div>
				<div  className="cursor-pointer text-right text-xs mb-2"
					onClick={() => setShowPasswordRequirements(!showPasswordRequirements)}
				>
					{showPasswordRequirements ? "Hide requirements" : "Show requirements"}
				</div>

				<div className="relative flex h-field-height w-full">
					{confirmPassword.length > 0 && (
						<label className="absolute top-1/2 -translate-y-[150%] left-[25px] bg-login-background text-field-label-text pointer-events-none" htmlFor="confirm-password">
							Confirm Password
						</label>
					)}
					<input
						id="confirm-password"
						className={`h-full w-full pl-[25px] outline-none border-none text-lg bg-login-background text-field-input-text rounded-field-input shadow-field-input ${
							confirmPasswordError ? "border-error border-error-border" : ""
						}`}
						aria-labelledby="confirm-password-label"
						name="confirmPassword"
						type="password"
						placeholder="Confirm Password"
						minLength={8}
						value={confirmPassword}
						onChange={handleInputFieldChange}
						required
					/>
				</div>

				{confirmPasswordError && (
					<p className="text-xs text-red-500 pt-1">Passwords do not match</p>
				)}
				{passwordReqError && (
					<p className="text-xs text-red-500 pt-1 pl-10">
						Password does not meet requirements.
					</p>
				)}
				<br />
				<button
					id="registration-button"
					className="w-[70%] h-10 my-1 leading-4"
				>
					Register
				</button>
			</form>
			<div
				className="my-2 text-gray-600 text-[15.5px]"
				role="link"
				aria-label="User Login Link"
			>
				Already have an account?
				<a href="/login" className="text-light-purple hover:text-dark-purple">
					{" "}
					Login now
				</a>
			</div>
		</div>
	)
}

export default RegistrationForm
