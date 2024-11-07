import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import validateEmail from '../../validators/emailValidator';
import { useNavigate } from 'react-router-dom';

const registerUser = async (email,password,username,fullname) =>{
  try {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${baseUrl}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, fullName: fullname }),
    });

    // Check if the response status is OK (200)
    if (response.ok) {
      const data = await response.json();
      return { success: true, userId: data }; // Return userId along with success
    } else {
      // Handle different response status codes here if needed
      const errorData = await response.json();
      console.error('Registration failed:', errorData.message);
      return { success: false, message: errorData.message };
    }
  } catch (error) {
    console.error('There was a problem with the Registration:', error);
    return { success: false };
  }
}

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter valid email');
      return;
    }
    registerUser(email,password,username,fullname);

    alert('Registration Successful');

    navigate('/login');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        <Form onSubmit={handleRegister}>
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

          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formFullname" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
            Register
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p><a href="/login">Already have an account? Login</a></p>
        </div>
      </Card>
    </Container>
  );
}

export default Register;
