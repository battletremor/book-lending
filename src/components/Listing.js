import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { Grid2, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const apiMock = [
  {
    "bookId": 1,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "condition": "Good",
    "status": "Available",
    "userId": 1
  },
  {
    "bookId": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Classic",
    "condition": "Excellent",
    "status": "Unavailable",
    "userId": 2
  }
]

const Listing = () => {
  const [books, setBooks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const userId = useSelector((state) => state.BL.UserId); // Get the logged-in userId from Redux
  const navigate = useNavigate();

  console.log(userId)
  // Fetch books from mock API
  useEffect(() => {
    const fetchBooks = async () => {
      //const response = await axios.get('/api/books'); // Replace with mock API URL
      setBooks(apiMock);
    };
    fetchBooks();
  }, []);

  const handleEdit = (bookId) => {
    console.log(`Editing book with ID: ${bookId}`);
    navigate(`/listing/edit/${bookId}`);
  };

  const handleDelete = (bookId) => {
    console.log(`Deleting book with ID: ${bookId}`);
    // Implement delete functionality
  };

  const handleAddBook = () => {
    // Logic for adding a new book
    navigate('/listing/add');
    console.log('Add book clicked');
  };

  // DataGrid columns
  const columns = [
    { field: 'id', headerName: 'Book ID', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'genre', headerName: 'Genre', flex: 1 },
    { field: 'condition', headerName: 'Condition', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'bookId_userId', headerName: 'Unique ID', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => {
        const isEditable = params.row.userId === userId; // Check if userId matches
        return (
          <>
            <IconButton
              color="primary"
              disabled={!isEditable}
              onClick={() => handleEdit(params.row.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="secondary"
              disabled={!isEditable}
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const handleRowClick = (params) => {
    setSelectedBook(params.row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBook(null);
  };
  // Create rows for DataGrid
  const rows = books.map((book) => ({
    id: book.bookId, // assuming book has a unique `bookId`
    title: book.title,
    author: book.author,
    genre: book.genre,
    condition: book.condition,
    status: book.status,
    userId: book.userId, // ID of the user who listed the book
    bookId_userId: `${book.bookId}_${book.userId}`, // unique ID (bookId_userId)
  }));

  return (
    <Box sx={{ padding: '20px', height: '100%'}}>
      {/* Row with title and button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Books Listed:
        </Typography>
        <Button variant="contained" color="primary" onClick={() => {handleAddBook() }}>
          Add Book
        </Button>
      </Box>

      {/* DataGrid container */}
      <Box sx={{ height: '95%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          sx={{ width: '100%' }}
          onRowClick={handleRowClick} // Handle row click event
          disableColumnSelector
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true },
            },
          }}
        />
      </Box>

      {/* Dialog Popup for Book Information */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg" fullWidth>
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          
          <Grid2 container spacing={2}>
            {/* Left Column - Image Placeholder */}
            <Grid2  xs={4}>
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '50px',
                  color: '#757575',
                }}
              >
                📖 {/* Book Icon Placeholder */}
              </Box>
            </Grid2>

            {/* Right Column - Book Details */}
            <Grid2  xs={8}>
              {selectedBook && (
                <Box>
                  <TextField
                    label="Book ID"
                    fullWidth
                    value={selectedBook.id}
                    readOnly={true}
                    margin="normal"
                  />
                  <TextField
                    label="Title"
                    fullWidth
                    value={selectedBook.title}
                    readOnly={true}
                    margin="normal"
                  />
                  <TextField
                    label="Author"
                    fullWidth
                    value={selectedBook.author}
                    readOnly={true}
                    margin="normal"
                  />
                  <TextField
                    label="Genre"
                    fullWidth
                    value={selectedBook.genre}
                    readOnly={true}
                    margin="normal"
                  />
                  <TextField
                    label="Condition"
                    fullWidth
                    value={selectedBook.condition}
                    readOnly={true}
                    margin="normal"
                  />
                  <TextField
                    label="Status"
                    fullWidth
                    value={selectedBook.status}
                    readOnly={true}
                    margin="normal"
                  />
                </Box>
              )}
            </Grid2>
          </Grid2>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Listing;
