import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './pages.css';
// import progress from '../assets/progress.png';
import { deleteBook } from '../redux/books/Books';

const ItemBook = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, categories,
  } = props;

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  const [percentage, setPercentage] = useState(Math.floor(Math.random() * 90));

  const increasePerc = () => {
    if (percentage < 100) {
      setPercentage(percentage + 10 <= 100 ? percentage + 10 : 100);
    }
  };

  return (
    <div className="book-container">
      <div className="block-l">
        <div className="info">
          <span className="categories">{categories}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="btn-container">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="block-r">
        <div className="progress">
          <svg className="svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" strokeDasharray="264 0" />
            <circle
              className="bar"
              cx="50"
              cy="50"
              r="42"
              strokeDasharray={`${percentage * 2.64} ${
                (100 - percentage) * 2.64
              }`}
            />
          </svg>
          <div className="count">
            <p>{`${percentage}%`}</p>
            <span>Completed</span>
          </div>
        </div>

        <div className="progress-info-container">
          <div className="progress-info">
            <span className="chapter-title">Current chapter</span>
            <span className="chapter-number">Chapter 1</span>
          </div>
          <button className="btn-a-solid" type="button" onClick={increasePerc}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

ItemBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default ItemBook;
