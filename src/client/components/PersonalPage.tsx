import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Personal Page</h1>
      <p>This page is accessible only with a valid token.</p>
    </div>
  );
};

export default PersonalPage;