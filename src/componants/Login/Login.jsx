import React, { useState } from 'react';
import './Login.css'; // Assuming your CSS is similar to the provided HTML structure
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Destructure the login function from useAuth

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submit action
    try {
      await login(username, password); // Use the login function from your auth context
      console.log('Logged in successfully');
      // Redirect the user or show a success message
    } catch (error) {
      console.error('Failed to log in', error);
      // Show an error message
    }
  };

  return (
    <div className="container">
      <h1>hi</h1>
      <div className="form" id="login">
        <h1>Welcome Back</h1>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autoFocus
            placeholder="Username"
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form__button" id="loginButton" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
