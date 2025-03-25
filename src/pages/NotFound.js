
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="back-link">Go back to home</Link>
    </div>
  );
};

export default NotFound;
