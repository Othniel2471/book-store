import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector as UseSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import AddBook from './AddBook';
import BookList from './BookList';

const BookLogic = () => {
  const { bookList } = UseSelector((state) => state.books);

  const dispatch = useDispatch();

  const addBookItem = (title, author) => {
    dispatch(
      addBook({
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      }),
    );
  };

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <BookList books={bookList} deleteBook={deleteBook} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookLogic;
