import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import Search from './components/Search';
import Listing from './components/Listing';
import SideNavbar from './components/Layout/SideNavbar'; // Make sure this path is correct
import Home from './pages/Home';
import AddBook from './components/Books/AddBook'
import EditBook from './components/Books/EditBook';
import ExchangeRequestsPage from './pages/ExchangeRequests';
import ExchangeRequestDetail from './components/Exchange/ExchangeRequestDetail';
import TransactionHistory from './components/Exchange/TransactionHistory';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <div className="d-flex">
            <SideNavbar setIsAuthenticated={setIsAuthenticated} />
            <div className="content" style={{ flex: 1 }}>
              <Routes>
                {/* Private Routes */}
                <Route path="/search" element={<Search />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="/listing/add" element={<AddBook />} />
                <Route path="/listing/edit/:bookId" element={<EditBook />} />
                <Route path="/exchange/requests" element={<ExchangeRequestsPage />} />
                <Route path="/exchange/requests/:requestId" element={<ExchangeRequestDetail />} />
                <Route path="/transactions/history" element={<TransactionHistory />} />
                <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect to home if route is not found */}
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
