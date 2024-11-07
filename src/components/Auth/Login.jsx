import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import validateEmail from '../../validators/emailValidator';
import { useDispatch } from 'react-redux';
import {UpdateUserId} from '../../features/slice'

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Authentication Logic Here
    if (!validateEmail(email)) {
      alert('Please enter valid email');
      return;
    }
    // Authenticate the user
    const result = await authenticateUser(email, password);
    if (result.success) {
      setIsAuthenticated(true);
      console.log('User ID:', result.userId); // You can store or use the userId as needed
      navigate('/dashboard');
    } else {
      alert(result.message || 'Invalid credentials');
    }
  };

  const authenticateUser = async (email, password) => {
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Check if the response status is OK (200)
      if (response.ok) {
        const data = await response.json();
        dispatch(UpdateUserId(data));
        return { success: true, userId: data }; // Return userId along with success
      } else {
        // Handle different response status codes here if needed
        const errorData = await response.json();
        console.error('Authentication failed:', errorData.message);
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error('There was a problem with the authentication:', error);
      return { success: false };
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>

      <div className="text-center mt-3">
        <p><a href="/forgot-password">Forgot Password?</a></p>
        <p><a href="/register">New User? Register</a></p>
      </div>
    </Card>
  </Container>
  );
}

export default Login;
