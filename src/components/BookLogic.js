import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector as UseSelector } from 'react-redux';
import {
  getBooks,
  addBookToApi,
  removeBookFromApi,
} from '../redux/books/booksSlice';
import AddBook from './AddBook';
import BookList from './BookList';
import '../styles/loader.css';

const BookLogic = () => {
  const { bookList, loading, error } = UseSelector((state) => state.books);

  const dispatch = useDispatch();

  const addBookItem = (title, author, category) => {
    dispatch(
      addBookToApi({
        item_id: uuidv4(),
        title,
        author,
        category,
      }),
    );
  };

  const deleteBook = (id) => {
    dispatch(removeBookFromApi(id));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) {
    return <div className="lds-hourglass" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  let books = [];

  if (typeof bookList === 'object') {
    books = Object.keys(bookList).map((key) => {
      const book = bookList[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
  }

  return (
    <div>
      <BookList books={books} deleteBook={deleteBook} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookLogic;
