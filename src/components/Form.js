import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addBook());
  };

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit" onClick={addClickHandler}>ADD BOOk</button>
    </form>
  );
};

export default Form;
