import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import apiService from '../api/api-service';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation to access the current location object

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Assuming apiService properly handles the request and returns a token
            const token = await apiService('/auth/login', 'POST', { email, password });
            if (token) {
                localStorage.setItem('token', token);
                
                // Determine the route to redirect to after successful login
                const from = location.state?.from?.pathname || "/defaultRouteAfterLogin";
                navigate(from, { replace: true });
            } else {
                // Handle case where login is unsuccessful or token is not returned
                console.error('Login failed or token not returned');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;