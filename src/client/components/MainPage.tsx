import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>This is the main page of the application.</p>
      {/* Add a Link to navigate to the PersonalPage */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <Link to="/personal">Go to Personal Page</Link>
      </div>
    </div>
  );
};

export default MainPage;