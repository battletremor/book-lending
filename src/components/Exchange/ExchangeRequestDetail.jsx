import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const ExchangeRequestDetail = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState({});
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [exchangeDuration, setExchangeDuration] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    // Mock API call to fetch exchange request details
    const fetchRequestDetail = async () => {
      const mockRequest = {
        id: requestId,
        book: 'Book 1',
        sender: 'User A',
        deliveryMethod: 'Pick-up',
        exchangeDuration: '1 week',
        status: 'Pending',
      };
      setRequest(mockRequest);
      setDeliveryMethod(mockRequest.deliveryMethod);
      setExchangeDuration(mockRequest.exchangeDuration);
      setStatus(mockRequest.status);
    };
    fetchRequestDetail();
  }, [requestId]);

  const handleAccept = () => {
    setStatus('Accepted');
    // Update status via API
  };

  const handleReject = () => {
    setStatus('Rejected');
    // Update status via API
  };

  const handleModify = () => {
    // Send modified request details via API
    alert('Request modified!');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Manage Exchange Request
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Book"
          fullWidth
          value={request.book}
          readOnly
          margin="normal"
        />
        <TextField
          label="Sender"
          fullWidth
          value={request.sender}
          readOnly
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Delivery Method</InputLabel>
          <Select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <MenuItem value="Pick-up">Pick-up</MenuItem>
            <MenuItem value="Mail">Mail</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Exchange Duration</InputLabel>
          <Select
            value={exchangeDuration}
            onChange={(e) => setExchangeDuration(e.target.value)}
          >
            <MenuItem value="1 week">1 week</MenuItem>
            <MenuItem value="2 weeks">2 weeks</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="success" onClick={handleAccept}>
          Accept
        </Button>
        <Button variant="contained" color="error" onClick={handleReject}>
          Reject
        </Button>
        <Button variant="contained" color="primary" onClick={handleModify}>
          Modify Request
        </Button>
      </Box>
    </Box>
  );
};

export default ExchangeRequestDetail;
