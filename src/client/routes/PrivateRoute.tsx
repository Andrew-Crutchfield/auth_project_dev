import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
};

const PrivateRoute: React.FC = () => {
    let location = useLocation(); 

    return isAuthenticated() ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default PrivateRoute;