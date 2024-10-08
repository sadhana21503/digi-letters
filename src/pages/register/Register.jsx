import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      username: formData.username,
      email: formData.email,
      password: formData.password
    }));

    alert("Registration successful! Please login.");
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      <h2>Register and Login</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input 
          type="text" 
          placeholder="Username" 
          value={formData.username} 
          onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} 
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-form">
        Already have an account? <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
};

export default Register;
