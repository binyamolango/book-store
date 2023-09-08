import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xSNrWszb8M7Mv3sIcXfM/';

const fetchBooks = createAsyncThunk('books/fetchBooks', () => (axios
  .get(`${baseApiUrl}books`)
  .then((response) => response.data)
));

const addBook = createAsyncThunk('books/addBook', (book) => (axios
  .post(`${baseApiUrl}books`, book)
  .then((response) => (response.data === 'Created' ? book : null))
));

const deleteBook = createAsyncThunk('books/deleteBook', (ITEM_ID) => (axios
  .delete(`${baseApiUrl}books/${ITEM_ID}`)
  .then((response) => (response.data === 'The book was deleted successfully!' ? ITEM_ID : null))
));

const initialState = {
  books: [],
  error: '',
  status: 'idle',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
        state.error = action.payload.length === 0 ? 'No result was found!' : '';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.status = 'succeeded';
          state.error = '';
          state.books.push(action.payload);
        } else {
          state.status = 'failed';
          state.error = 'Unable to add record!';
        }
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.status = 'succeeded';
          state.error = '';
          state.books = state.books.filter((book) => book.item_id !== action.payload);
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.status = 'failed';
          state.error = 'Unable to delete record!';
        }
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export { addBook, fetchBooks, deleteBook };
export default booksSlice.reducer;
