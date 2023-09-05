const configureStore = require('@reduxjs/toolkit').configureStore;
const booksReducer = require('./books/booksSlice');

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

module.exports = store;
