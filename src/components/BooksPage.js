import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Books from './Books';
import Form from './Form';
import styles from './BooksPage.module.css';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ul style={{ listStyle: 'none' }}>
        {books.map((book) => (
          <li key={book.item_id}>
            <Books
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;
