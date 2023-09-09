import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import style from './Books.module.css';
import ProgressBar from './ProgressBar';

const Books = (props) => {
  const {
    title, author, id,
  } = props;

  const dispatch = useDispatch();

  const removeClickHandler = () => {
    dispatch(deleteBook(id));
  };

  const chapter = () => Math.floor(Math.random() * 30 + 1);
  return (
    <div className={style.wrapper}>
      <div className={style.book}>
        <div className={style.book_details}>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className={style.btn_container}>
          <button type="button" className={style.btn}>Comments</button>
          <button type="button" onClick={removeClickHandler} className={style.btn}>Remove</button>
          <button type="button" className={style.btn}>Edit</button>
        </div>
      </div>
      <ProgressBar />
      <div className={style.line} />
      <div className={style.chapter}>
        <div>
          <p className={style.chapter_heading}>CURRENT CHAPTER</p>
          <p className={style.chapter}>{`Chapter ${chapter()}`}</p>
        </div>
        <button type="button" className={style.progress_update}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Books;
