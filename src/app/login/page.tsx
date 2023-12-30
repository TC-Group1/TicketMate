'use client';

import React, { useState, FC } from 'react';
import { useUserContext } from '../../features/user/UserContextProvider';
import { useRouter } from 'next/router';
import { StyleSheet, UserContext } from '../../types';

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState('');
  const [userNotification, setUserNotification] = useState<string>('');

  const userContext: UserContext | null = useUserContext();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function handleSubmit(username: string, password: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    if (username === '' || password === '') {
        setUserNotification('Please enter a username and password');
        return;
    }
        userContext?.handleLoginSubmit(username, password, event);
  };
  
  return (
    <div className="login-form">
      <div className="content">
        <div className="text">Ticketmate Login</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <span className="fas fa-user"></span>
            <label>Email or Phone</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="fas fa-lock"></span>
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button onClick={(e) => handleSubmit(username, password, e)}>Sign in</button>
          <div className="sign-up">
            Don't have an account?
            <a href="#"> Sign up now</a>
          </div>
        </form>
        {userNotification ? (
            <div style={styles.errorBox}>
          <h2 style={styles.errorText}>{userNotification}</h2>
          </div>
        ) : (
            ''
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
            ''
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
    errorText: {
        color: 'red',
        fontSize: '0.8rem'
    },
    errorBox: {
        border: '1px solid red',
        padding: '10px 2px',
        borderRadius: '5px',
        background: 'rgba(245, 245, 245)',
    }
};

export default LoginPage;
