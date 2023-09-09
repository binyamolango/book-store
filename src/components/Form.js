import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import style from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      item_id: id,
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categories = [
    'Fiction', 'Spiritual', 'Thriller', 'Adventure', 'Biography', 'Anthology', 'Action', 'Other',
  ];

  return (
    <>
      <hr />
      <section>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Book title" value={title} onChange={handleTitleChange} className={style.inputs} required />
          <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} className={style.inputs} required />
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button type="submit" className={style.submit_btn}>ADD BOOK</button>
        </form>
      </section>
    </>
  );
};

export default Form;
