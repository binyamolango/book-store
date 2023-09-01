import PropTypes from 'prop-types';

const Books = (props) => {
  const { title, author } = props;

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
        <button type="button">Remove</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
