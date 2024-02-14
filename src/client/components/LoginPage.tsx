import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import apiService from '../api/api-service';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for storing error messages
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter both email and password.');
            return; 
        }

        try {
            const token = await apiService('/auth/login', 'POST', { email, password });
            if (token) {
                localStorage.setItem('token', token); 
                
                const from = location.state?.from?.pathname || "/main";
                navigate(from, { replace: true });
            } else {
                setError('Login failed or token not returned');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required />
            </div>
            <button type="submit">Login</button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
    );
};

export default LoginPage;
