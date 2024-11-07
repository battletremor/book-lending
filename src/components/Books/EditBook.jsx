// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Autocomplete } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams(); // Get the bookId from URL params

  // State variables for form inputs
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
    const apiMock = {title: "Random ttile",author: "Author", genre: "Action", condition:"New",availability: "Rented"}
  // Fetch the book details for editing
  const fetchBookDetails = async () => {
    try {
      setLoading(true);
      //const response = await axios.get(`/api/books/${bookId}`);
      const { title, author, genre, condition, availability } = apiMock;

      setTitle(title);
      setAuthor(author);
      setGenre(genre);
      setCondition(condition);
      setAvailability(availability);
    } catch (error) {
      console.error('Error fetching book details:', error);
      alert('Failed to fetch book details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]); // Fetch book details when the component mounts

  // API call to update book details
  const updateBook = async (bookData) => {
    try {
      setLoading(true);
      //const response = await axios.put(`/api/books/${bookId}`, bookData);
      //console.log('Book updated successfully:', response.data);
      alert('Book updated successfully');
      navigate('/listing'); // Redirect to the books list page after update
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the book data for update
    const updatedBook = {
      title,
      author,
      genre,
      condition,
      availability,
    };

    // Call the API to update the book
    updateBook(updatedBook);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Edit Book</Typography>
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
          {loading ? 'Updating...' : 'Update Book'}
        </Button>
      </form>
    </Container>
  );
};

export default EditBook;
