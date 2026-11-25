import { useState } from 'react';
import API from '../api';
import './Login.css';

function Register({ onLogin, onGoToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post('/auth/register', { email, password });

      const response = await API.post('/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      onLogin();

    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister} className="login-form">
        <h2>Create Account</h2>
        <p>Join LeadFlow CRM</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
        />

        <button type="submit">Register</button>

        <p className="auth-switch">
          Already have an account?
          <span onClick={onGoToLogin}> Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;