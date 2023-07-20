import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/books.css';

const BookItem = ({ book, deleteBook }) => {
  const handleDelete = () => {
    deleteBook(book.item_id);
  };

  const percentage = `${Math.floor(Math.random() * 100)}%`;

  return (
    <li>
      <div className="book">
        <div className="book-details">
          <div className="book-info">
            <h4 className="category">{book.category}</h4>
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.author}</p>
            <div className="action-buttons">
              <button type="button">comments</button>
              <button type="button" onClick={handleDelete}>
                remove
              </button>
              <button type="button">edit</button>
            </div>
          </div>
        </div>
        <div className="progress">
          <div className="progress-stat">
            <CircularProgressbar
              value={percentage}
              styles={{
                trail: {
                  stroke: '#d6d6d6',
                  strokeLinecap: 'butt',
                  transformOrigin: 'center center',
                },
                path: {
                  stroke: '#0290ff',
                  strokeLinecap: 'butt',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  transformOrigin: 'center center',
                },
              }}
            />
          </div>
          <div className="stat-status">
            <div className="percent">{percentage}</div>
            <div className="completed">completed</div>
          </div>
        </div>
        <div className="current-chapter">
          <p className="chapter">CURRENT CHAPTER</p>
          <p className="chapter-title">Chapter 17</p>
          <button type="button" className="update">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
