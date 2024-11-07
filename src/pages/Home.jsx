import React from 'react';
import { Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Home = ({ username = "User" }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      {/* Welcome message with dynamic username */}
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome, {username}!
      </Typography>

      <Typography variant="h6" color="textSecondary">
        We're excited to have you in Book Lending App
      </Typography>

      {/* Arrow with message to guide user */}
      <Box mt={5} display="flex" flexDirection="row" alignItems="center">
        <ArrowBackIcon fontSize="large" color="primary" />
        <Typography variant="subtitle1" color="textSecondary">
          Use the navigation to get started
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
