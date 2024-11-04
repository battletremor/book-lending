import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication (e.g., remove tokens from local storage)
    localStorage.removeItem('authToken'); // Adjust the key as per your implementation
    // Optionally clear user data or perform additional cleanup here

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="logout-container text-center">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
