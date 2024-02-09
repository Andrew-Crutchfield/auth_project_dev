import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          {/* Nested routes here are only accessible when PrivateRoute allows */}
          <Route path="/main" element={<MainPage />} />
          {/* Add more protected routes as needed */}
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;