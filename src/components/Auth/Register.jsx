import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
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
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            placeholder="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
