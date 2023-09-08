import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xSNrWszb8M7Mv3sIcXfM/';

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseApiUrl}books`);
  return response.data;
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(`${baseApiUrl}books`, book);
  return response.data === 'Created' ? book : null;
});

const deleteBook = createAsyncThunk('books/deleteBook', async (ITEM_ID) => {
  const response = await axios.delete(`${baseApiUrl}books/${ITEM_ID}`);
  return response.data === 'The book was deleted successfully!' ? ITEM_ID : null;
});

const initialState = {
  books: [],
  error: '',
  loading: 'idle',
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
        const books = Object.keys(action.payload).map((bookId) => ({
          item_id: bookId,
          ...action.payload[bookId][0],
        }));
        state.books = books;
        state.error = books.length === 0 ? 'No result was found!' : '';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
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
      });

    builder
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.status = 'succeeded';
          state.error = '';
          state.books = state.books.filter((bookId) => bookId.item_id !== action.payload);
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
