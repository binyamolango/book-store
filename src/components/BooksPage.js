import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from './Books';
import Form from './Form';

const mapStateToProps = (state) => ({
  books: state.books,
});

const BooksPage = ({ books }) => (
  <div className="books-display">
    <ul className="books">
      {books.map((book) => (
        <Books title={book.title} author={book.author} key={book.id} />
      ))}
    </ul>
    <Form />
  </div>
);

BooksPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(BooksPage);
