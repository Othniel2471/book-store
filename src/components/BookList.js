import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <BookItem book={book} key={book.item_id} deleteBook={deleteBook} />
      ))}
    </ul>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
