import Books from './Books';
import Form from './Form';

const BooksPage = () => {
  const books = [
    { title: 'Education', author: 'Ellen White', id: 1 },
    { title: 'The Alchemist', author: 'Paul Coleho', id: 2 },
    { title: 'The seven habits of highly effective people', author: 'Stephen R. Convey', id: 3 },
  ];

  return (
    <div className='books-display'>
      <ul className="books">
        {books.map((book) => (
          <Books title={book.title} author={book.author} key={book.id} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;