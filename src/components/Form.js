import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const addClickHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(), title, author, category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form>
      <input type="text" placeholder="Book title" value={title} onChange={titleHandler} />
      <input type="text" placeholder="Author" value={author} onChange={authorHandler} />
      <input type="text" placeholder="Category" value={category} onChange={categoryHandler} />
      <button type="submit" onClick={addClickHandler}>Add Book</button>
    </form>
  );
};

export default Form;
