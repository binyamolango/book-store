import { useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="books-display">
      <ul className="books">
        {books.map((book) => (
          <Books
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;
