import { useState } from 'react';
import API from '../api';

function Login({ onLogin, onRegister }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post('/auth/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);

            onLogin();

        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
          }
    };

    return (
        <div className="login-container">
            <p className="auth-switch">
               Don't have an account?
              <span onClick={onRegister}> Sign Up</span>         
            </p>
            <form onSubmit={handleLogin} className="login-form">

                <h2>LeadFlow CRM</h2>
                <p>Login to your account</p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;