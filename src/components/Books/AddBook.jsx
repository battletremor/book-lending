// src/components/AddBook.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Autocomplete } from '@mui/material';
import axios from 'axios'; // Axios for making API calls

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(false);

  // Options for dropdowns
  const genreOptions = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Biography', 'Fantasy', 'Romance'];
  const conditionOptions = ['New', 'Like New', 'Used', 'Worn'];
  const availabilityOptions = ['Available', 'Unavailable', 'Requested', 'On Hold'];

  // Mock API call function
  const addBook = async (bookData) => {
    try {
      setLoading(true);
      // Replace this with your actual API endpoint
      //const response = await axios.post('/api/books', bookData);
      //console.log('Book added successfully:', response.data);
      alert('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the book data
    const newBook = {
      title,
      author,
      genre,
      condition,
      availability,
    };

    // Call the mock API to add the book
    addBook(newBook);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add a New Book</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Author"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Box>
        
        {/* Genre Dropdown (Autocomplete) */}
        <Box mb={2}>
          <Autocomplete
            value={genre}
            onChange={(event, newValue) => setGenre(newValue)}
            options={genreOptions}
            renderInput={(params) => <TextField {...params} label="Genre" variant="outlined" />}
            isOptionEqualToValue={(option, value) => option === value}
            disableClearable
            fullWidth
            required
          />
        </Box>

        {/* Condition Dropdown (Autocomplete) */}
        <Box mb={2}>
          <Autocomplete
            value={condition}
            onChange={(event, newValue) => setCondition(newValue)}
            options={conditionOptions}
            renderInput={(params) => <TextField {...params} label="Condition" variant="outlined" />}
            isOptionEqualToValue={(option, value) => option === value}
            disableClearable
            fullWidth
            required
          />
        </Box>

        {/* Availability Dropdown (Autocomplete) */}
        <Box mb={2}>
          <Autocomplete
            value={availability}
            onChange={(event, newValue) => setAvailability(newValue)}
            options={availabilityOptions}
            renderInput={(params) => <TextField {...params} label="Availability" variant="outlined" />}
            isOptionEqualToValue={(option, value) => option === value}
            disableClearable
            fullWidth
            required
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Adding...' : 'Add Book'}
        </Button>
      </form>
    </Container>
  );
};

export default AddBook;
