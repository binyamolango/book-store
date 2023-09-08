import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xSNrWszb8M7Mv3sIcXfM/';

// generate pending, fulfilled and rejected actions
const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios
  .get(`${baseURL}books`)
  .then((response) => response.data));

const addBook = createAsyncThunk('book/addBook', (book) => axios
  .post(`${baseURL}books`)
  .then((response) => (response.data === 'Created' ? book : null)));

const deleteBook = createAsyncThunk('book/deleteBook', (ITEM_ID) => axios
  .delete(`${baseURL}books/${ITEM_ID}`)
  .then((response) => (response.data === 'The book was deleted successfully!' ? ITEM_ID : null)));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });

    builder.addCase(addBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
      state.error = '';
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books.filter((book) => book.item_id !== action.payload);
      state.error = '';
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export { fetchBooks, addBook, deleteBook };
export default booksSlice.reducer;
