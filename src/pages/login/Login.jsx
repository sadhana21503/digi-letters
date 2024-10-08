import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { username, password } = JSON.parse(storedUser);
      setCredentials({ username, password });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = credentials;

    if (username === "classt" && password === "classt@123") {
      alert("Login successful as Teacher!");
      navigate('/teacher');
    } else if (username === "hod" && password === "hod@123") {
      alert("Login successful as HOD!");
      navigate('/hod');
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const storedCredentials = JSON.parse(storedUser);
        if (username === storedCredentials.username && password === storedCredentials.password) {
          alert("Login successful as student!");
          navigate('/home'); 
        } else {
          alert("Invalid username or password");
        }
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login with us</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={credentials.username} 
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={credentials.password} 
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
        />
        <button type="submit">Login</button>
      </form>
      <p className="switch-form">
        Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
      </p>
    </div>
  );
};

export default Login;
