import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import '../styles/bookList.css';

const BookList = ({ books, deleteBook }) => (
  <div className="booklist">
    <ul>
      {books.map((book) => (
        <BookItem book={book} key={book.item_id} deleteBook={deleteBook} />
      ))}
    </ul>
    <hr />
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
