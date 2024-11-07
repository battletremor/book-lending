import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import BookIcon from '@mui/icons-material/Book';
import ListIcon from '@mui/icons-material/List';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import './SideNavbar.css';

const SideNavbar = ({ setIsAuthenticated }) => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Clear any authentication state here if needed
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', width: '250px' }}>
      <nav className="navbar navbar-light flex-column" style={{ flex: 1, borderRight: '1px solid rgba(211, 211, 211, 0.75)'}}>
        <div className="d-flex align-items-center ">
          <BookIcon  style={{ marginRight: '10px' }}/>
          <Link className="navbar-brand" to="/">Book Lending</Link>
        </div>

        <div className="d-flex flex-column" style={{ flex: 1, justifyContent: 'center', paddingBottom: '20%' }}>
          <div className="navbar-nav flex-column">
            <div className="d-flex align-items-center nav-li">
              <ListIcon style={{ marginRight: '8px' }} />
              <Link className="nav-link" to="/listing">Listing</Link>
            </div>
            <div className="d-flex align-items-center nav-li">
              <ChangeCircleOutlinedIcon style={{ marginRight: '8px' }} />
              <Link className="nav-link" to="/exchange/requests">Exchanges</Link>
            </div>
          </div>
        </div>

        <div className="mt-auto text-center" style={{ paddingBottom: '20px' }}>
          <Button
            variant="outlined"
            endIcon={<LogoutIcon />}
            onClick={handleLogout}
            style={{ color: 'black', borderColor: 'grey' }}
          >
            Logout
          </Button>
          <span className="text-muted" style={{ fontSize: '0.9rem', display: 'block', marginTop: '10px' }}>
            V1.0
          </span>
        </div>
      </nav>
    </div>

  );
};

export default SideNavbar;
