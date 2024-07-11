"use client";

import React, { useState, FC } from "react";
import { useUserContext } from "../../../features/user/UserContextProvider";
import { StyleSheet, UserContext } from "../../../types";

// Modal additions
import Modal from "@/components/modals/modal";
import RegistrationForm from "../../../components/registration-form";

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userNotification, setUserNotification] = useState<string>("");

  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  const userContext: UserContext | null = useUserContext();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setError(false);
    showErrorRef.current = false;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(false);
    showErrorRef.current = false;
  };

  function handleSubmit(
    // username: string,
    // password: string
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    if (username === "" || password === "") {
      setUserNotification("Please enter a username and password");
      setError(true);
      showErrorRef.current = true;
    }

    if (username && password) {
      let usernameUpdate = username; // Necessary to remove special characters from phone number

      if (!username.includes("@")) {
        const stripSpecialChars = username.replace(/[^+\d]+/g, "");

        if (!phoneNumberRegex.test(stripSpecialChars)) {
          setError(true);
          showErrorRef.current = true;
          throw new Error("Invalid phone number input");
        } else usernameUpdate = stripSpecialChars;
      } else if (username.includes("@")) {
        if (!emailRegex.test(username)) {
          setError(true);
          showErrorRef.current = true;
          throw new Error("Invalid email input.");
        }
      }

      userContext?.useLoginSubmission(usernameUpdate, password);
      console.log("Trying to login");
    }
  }

  return (
    <div className="login-form">
      <div className="content">
        <div className="text">Ticketmate Login</div>
        <form>
          <div className="field">
            {username.length > 0 && <label>Email or Phone</label>}
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Email or Phone"
              style={
                showErrorRef.current === true
                  ? { border: "1.5px solid red" }
                  : {}
              }
            />
            <span className="fas fa-user"></span>
          </div>
          <div className="field">
            {password.length > 0 && <label>Password</label>}
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              style={
                showErrorRef.current === true
                  ? { border: "1.5px solid red" }
                  : {}
              }
            />
            <span className="fas fa-lock"></span>
          </div>
          <div>
            {showErrorRef.current === true ? (
              <p style={{ color: "red", textAlign: "left", fontSize: "small" }}>
                Invalid username or password
              </p>
            ) : null}
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button
            className="my-4 w-full h-12 text-lg font-semibold bg-light-purple rounded-3xl shadow text-white focus:bg-dark-purple focus:shadow-inner"
            onClick={(e) => handleSubmit(username, password, e)}
          >
            Sign in
          </button>
        </form>

        <div className="sign-up">
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

        {userNotification ? (
          <div style={styles.errorBox}>
            <h2 style={styles.errorText}>{userNotification}</h2>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {/* null check user context, then check if there's an error.
        If there's an error, render it to the UI */}
        {userContext ? (
          userContext.error ? (
            <div style={styles.errorBox}>
              <h2 style={styles.errorText}>{userContext.error}</h2>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  errorText: {
    color: "red",
    fontSize: "0.8rem",
  },
  errorBox: {
    border: "1px solid red",
    padding: "10px 2px",
    borderRadius: "5px",
    background: "rgba(245, 245, 245)",
  },
};

export default LoginPage;
