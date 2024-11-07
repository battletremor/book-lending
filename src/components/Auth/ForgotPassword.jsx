import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Send email to user with a link to reset
    // Verify the link with a token validation
    alert('Password reset link sent to your email');

    navigate('/login');
  };

  return (
    <Container>
      <h2>Forgot Password</h2>
      <Form onSubmit={handlePasswordReset}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
}

export default ForgotPassword;
