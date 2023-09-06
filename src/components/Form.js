import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addBook({id: }));
  };

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit" onClick={addClickHandler}>Add Book</button>
    </form>
  );
};

export default Form;
