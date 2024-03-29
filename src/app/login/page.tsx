"use client";

import React, { useState, FC, useRef, useContext } from "react";
import { useUserContext } from "../../features/user/UserContextProvider";
import { useRouter } from "next/router";
import { StyleSheet, UserContext } from "../../types";

// Modal additions
import Modal from "../../components/modal";
import RegistrationForm from "../../components/registration-form";
import { useModal } from "@/features/modal/ModalContextProvider";

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");
  const [userNotification, setUserNotification] = useState<string>("");

  const userContext: UserContext | null = useUserContext();

  const { openModal, isOpen } = useModal(); // From Modal Context

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function handleSubmit(
    username: string,
    password: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (username === "" || password === "") {
      setUserNotification("Please enter a username and password");
      return;
    }
    userContext?.handleLoginSubmit(username, password, event);
  }

  return (
    <div className="login-form">
      <div className="content">
        <div className="text">Ticketmate Login</div>
        <form action="#">
          <div className="field">
            {username.length > 0 && <label>Email or Phone</label>}
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Email or Phone"
              required
            />
            <span className="fas fa-user"></span>
          </div>
          <div className="field">
            {password.length > 0 && <label>Password</label>}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <span className="fas fa-lock"></span>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button onClick={(e) => handleSubmit(username, password, e)}>
            Sign in
          </button>
        </form>
       
        <div className="sign-up">
          Don't have an account? 
          <button id="signup-btn" onClick={openModal}>
            Sign up now
          </button>
          {isOpen && <Modal form={<RegistrationForm />} />}
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
