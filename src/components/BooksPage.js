import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Books from './Books';
import Form from './Form';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="books-display">
      <ul className="books">
        {books.map((book) => (
          <Books
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;
