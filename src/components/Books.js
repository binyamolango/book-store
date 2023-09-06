import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Books = (props) => {
  const {
    title, author, id, category,
  } = props;

  const dispatch = useDispatch();

  const removeClickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <p>
        Book title :
        {title}
      </p>
      <div>
        <p>
          Author :
          {author}
        </p>
        <p>
          Category :
          {category}
        </p>
        <button onClick={removeClickHandler} type="button">Remove</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
