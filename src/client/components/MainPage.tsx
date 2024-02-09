import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the main page!</p>
      <Link to="/personal">Go to Personal Page</Link>
    </div>
  );
};

export default MainPage;