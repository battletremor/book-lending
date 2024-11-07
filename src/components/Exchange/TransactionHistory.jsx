import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Mock API call to fetch transaction history
    const fetchTransactions = async () => {
      const mockTransactions = [
        { id: 1, book: 'Book 1', status: 'Accepted', date: '2024-10-01' },
        { id: 2, book: 'Book 2', status: 'Rejected', date: '2024-10-03' },
      ];
      setTransactions(mockTransactions);
    };
    fetchTransactions();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Transaction History
      </Typography>
      {transactions.map((transaction) => (
        <Box key={transaction.id} sx={{ marginBottom: '15px' }}>
          <Typography variant="body1">
            Book: {transaction.book} | Status: {transaction.status} | Date: {transaction.date}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TransactionHistory;
