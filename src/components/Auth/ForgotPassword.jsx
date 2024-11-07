import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
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
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <Form onSubmit={handlePasswordReset}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p><a href="/login">Remember your password? Login</a></p>
        </div>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
