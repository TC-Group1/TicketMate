import React, { useState, useRef, FC } from "react";
import { RegistrationFormData } from "../types";
import { useMutation } from "@tanstack/react-query";

// margin top input field
const marginTop = {
  marginTop: "20px",
};

const RegistrationForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (passwordError) setPasswordError(false);
    if (confirmPasswordError) setConfirmPasswordError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register Button Clicked");
    // if password doesnt meet requirements setPasswordError(true)
    if (formData.password !== confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      // if (emailRegex.test(formData.email) ?
      // navigate("/dashboard")
      // : setEmailError(true)
    }
  };

  // regex for email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Check database to see if email is already in use before user submits.
  // const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   const email: string = e.target.value;
  //   setEmail(email);
  //   // checks validity after 6 seconds

  //   if (!emailRegex.test(email)) {
  //     console.error("Invalid email address");
  //     // set error on input
  //   } else {
  //     // Complete fetch request
  //     console.log("Completing fetch request");
  //     // if successful
  //     setFormData({ ...formData, email: email });
  //     // if email in use
  //     // setErrorMessage("Email is already in use.")

  //     //Display error message
  //     console.log("Email is already in use... Already have an account? Login");
  //   }
  // };

  return (
    <div
      role="form"
      id="registration-form"
      aria-label="Registration Information"
      className="content"
    >
      <h1
        id="TicketMate-registration-form"
        className="text"
        role="heading"
        aria-level={1}
        style={{ marginBottom: "20px", textAlign: "center" }}
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
        <div className="field">
          {email.length > 0 && (
            <label className="label" htmlFor="email" id="email-label">
              Email
            </label>
          )}
          <input
            id="email"
            className="registration-input"
            aria-labelledby="email-label"
            name="email"
            type="email"
            placeholder="Email"
            autoFocus
            value={email}
            // onChange={handleEmailValidation}
            style={emailError ? { border: "1px solid red" } : {}}
            required
          />
        </div>

        <div className="field">
          {formData.firstName.length > 0 && (
            <label className="label" htmlFor="first-name" id="first-name-label">
              First Name
            </label>
          )}

          <input
            id="first-name"
            className="registration-input"
            aria-labelledby="first-name-label"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputFieldChange}
            required
          />
        </div>

        <div className="field" style={marginTop}>
          {formData.lastName.length > 0 && (
            <label className="label" htmlFor="last-name" id="last-name-label">
              Last Name
            </label>
          )}
          <input
            id="last-name"
            className="registration-input"
            aria-labelledby="last-name-label"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputFieldChange}
            required
          />
        </div>

        <div className="field" style={marginTop}>
          {formData.phoneNumber.length > 0 && (
            <label
              className="label"
              htmlFor="phone-number"
              id="phone-number-label"
            >
              Phone Number
            </label>
          )}
          <input
            id="phone-number"
            className="registration-input"
            aria-labelledby="phone-number-label"
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            maxLength={15}
            value={formData.phoneNumber}
            onChange={handleInputFieldChange}
          />
        </div>

        <div className="field" style={marginTop}>
          {formData.password.length > 0 && (
            <label htmlFor="password" id="password-label">
              Password
            </label>
          )}
          <input
            id="password"
            className="registration-input"
            aria-labelledby="password-label"
            name="password"
            type="password"
            placeholder="Password"
            minLength={8}
            value={formData.password}
            onChange={handleInputFieldChange}
            required
          />
        </div>

        <div className="field" style={marginTop}>
          {confirmPassword.length > 0 && (
            <label
              className="label"
              htmlFor="confirm-password"
              id="confirm-password-label"
            >
              Confirm Password
            </label>
          )}
          <input
            id="confirm-password"
            className="registration-input"
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

        <br />
        <button disabled={disabled} id="registration-button">
          Register
        </button>
      </form>
      <div
        className="registration-text sign-up"
        role="link"
        aria-label="User Login Link"
      >
        Already have an account?
        <a href="/login"> Login now</a>
      </div>
    </div>
  );
};

export default RegistrationForm;

// adding type="submit" to button removes CSS styling
