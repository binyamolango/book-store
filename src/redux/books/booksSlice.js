import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.filter((id) => id !== action.payload);
    },
  },
})

module.exports = booksSlice.reducer;
module.exports.booksActions = booksSlice.actions;
