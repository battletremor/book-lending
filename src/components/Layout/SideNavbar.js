import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideNavbar = ({ setIsAuthenticated }) => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Clear any authentication state here if needed
    setIsAuthenticated(false);
    navigate('/logout');
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', width: '250px' }}>
      <nav className="navbar navbar-light bg-light flex-column" style={{ flex: 1 }}>
        <Link className="navbar-brand" to="/">Book Exchange</Link>
        <div className="navbar-nav flex-column">
          <Link className="nav-link" to="/listing">Listing</Link>
          <Link className="nav-link" to="/search">Search</Link>
        </div>
        <div className="mt-auto"> {/* This pushes the logout button to the bottom */}
          <button
            className="nav-link btn btn-link"
            style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey' }}
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
