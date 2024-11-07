import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';

const ExchangeRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Mock API call to fetch exchange requests
    const fetchRequests = async () => {
      const mockRequests = [
        { id: 1, book: 'Book 1', sender: 'User A', status: 'Pending' },
        { id: 2, book: 'Book 2', sender: 'User B', status: 'Accepted' },
      ];
      setRequests(mockRequests);
    };
    fetchRequests();
  }, []);

  const handleNewRequest = () =>{
    console.log("Inside add new request")
    navigate('/exchange/requests/new');
  }
  const columns = [
    { field: 'book', headerName: 'Book', flex: 1},
    { field: 'sender', headerName: 'Sender', flex: 1},
    { field: 'status', headerName: 'Status', flex: 1},
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Link to={`/exchange/requests/${params.row.id}`}>
          <Button variant="contained">Manage Request</Button>
        </Link>
      ),
    },
  ];

  return (
    <Box sx={{ padding: '20px', height:'100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Exchange Requests:
        </Typography>
        <Button variant="contained" color="primary" onClick={() =>{handleNewRequest()}}>
          New Request
        </Button>
      </Box>
      <Box sx={{ height: '95%', width: '100%' }}>
        <DataGrid rows={requests} columns={columns} pageSize={5} />
      </Box>
    </Box>
  );
};

export default ExchangeRequestsPage;
