import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Listing from '../components/Listing';
import Search from '../components/Search';
import SideNavbar from '../components/Layout/SideNavbar';
import Logout from '../components/Auth/Logout';

const Dashboard = ({ setIsAuthenticated }) => {
  return (
    <div>
      <SideNavbar setIsAuthenticated={setIsAuthenticated} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            {/* You can put any sidebar elements here if needed */}
            BL V1.0
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/listing" element={<Listing />} />
              <Route path="/search" element={<Search />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Listing />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
