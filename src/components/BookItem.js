import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, deleteBook }) => {
  const handleDelete = () => {
    deleteBook(book.item_id);
  };

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
          <div className="progress-bar" />
          <div className="progress-stat">
            <div className="percent">60</div>
            <div className="completed">completed</div>
          </div>
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
