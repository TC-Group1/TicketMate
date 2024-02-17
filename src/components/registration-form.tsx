import React, { useState, useRef, FC } from "react";
import { RegistrationFormData } from "../types";
import Registration from "@/hooks/auth/register";

// margin top input field
const marginTop = {
  marginTop: "20px",
};

const RegistrationForm: FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Error handling state
  const [emailError, setEmailError] = useState<boolean>(false);
  const emailErrorRef = useRef<boolean>(false);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const passwordErrorRef = useRef<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);
  const confirmPasswordErrorRef = useRef<boolean>(false);

  const { register } = Registration();

  const handleInputFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === "email") {
      setEmailError(false);
      emailErrorRef.current = false;
    }
    if (e.target.name === "password") {
      setPasswordError(false);
      setShowPasswordRequirements(false);
      passwordErrorRef.current = false;
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPasswordError(false);
      confirmPasswordErrorRef.current = false;
      setConfirmPassword(e.target.value);
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // regex for email and password validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Input field checks
    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
      emailErrorRef.current = true;
    }

    if (formData.password !== confirmPassword) setConfirmPasswordError(true);
    if (!passwordRegex.test(formData.password)) {
      // Will implement password REGEX later
      setShowPasswordRequirements(true);
      setPasswordError(true);
      setConfirmPasswordError(true);
    }

    // Error or query handling
    if (
      emailErrorRef.current === true ||
      passwordErrorRef.current === true ||
      confirmPasswordErrorRef.current === true
    ) {
      console.error("Invalid input fields");
      throw new Error("Invalid input fields");
    } else if (
      emailErrorRef.current == false &&
      passwordErrorRef.current == false &&
      confirmPasswordErrorRef.current == false
    ) {
      console.log("Form Data: ", formData);

      try {
        const user = await register.mutateAsync(formData);
        console.log("User Created", user);
        // Create route that sends user to login
      } catch (error) {
        console.error("Error registering new user: ", error);
      }
    }
  };

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
          {formData.email.length > 0 && (
            <label className="label" htmlFor="email" id="email-label">
              Email
            </label>
          )}
          <input
            id="email"
            className="registration-input"
            aria-labelledby="email-label"
            name="email"
            type="text" // Changed from type 'email' for custom error handling.
            placeholder="Email"
            autoFocus
            value={formData.email}
            onChange={handleInputFieldChange}
            style={emailError ? { border: "1.5px solid red" } : {}}
            required
          />
          <br />
        </div>
        {emailError ? (
          <p
            style={{
              textAlign: "left",
              paddingBottom: "15px",
              paddingLeft: "40px",
              fontSize: "13px",
              color: "red",
            }}
          >
            Email is invalid
          </p>
        ) : null}

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
        {showPasswordRequirements ? (
          <div
            style={{ padding: "10px 0 0", fontSize: "small", color: "gray" }}
          >
            <ul>
              <li>*At least one uppercase letter</li>
              <li>*At least one lowercase letter</li>
              <li>*At least one digit</li>
              <li>*At least one special character among #?!@$%^&*-</li>
              <li>*A minimum length of 8 characters</li>
            </ul>
          </div>
        ) : null}
        <div className="field tooltip" style={marginTop}>
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
            style={passwordError ? { border: "1px solid red" } : {}}
            required
          />
        </div>
        <div
          style={{
            cursor: "pointer",
            textAlign: "right",
            fontSize: "small",
            marginTop: "5px",
          }}
          onClick={() => setShowPasswordRequirements(!showPasswordRequirements)}
        >
          {showPasswordRequirements ? "Hide requirements" : "Show requirements"}
        </div>

        <div className="field" style={{ marginTop: "10px" }}>
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
            style={confirmPasswordError ? { border: "1.5px solid red" } : {}}
            required
          />
        </div>

        {confirmPasswordError ? (
          <p
            style={{
              textAlign: "left",
              paddingBottom: "15px",
              paddingLeft: "40px",
              fontSize: "13px",
              color: "red",
            }}
          >
            Password and Confirm Password do not match
          </p>
        ) : null}
        <br />
        <button id="registration-button">Register</button>
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
