import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBookItem(title, author);
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please fill all the fields');
    }
  };

  return (
    <div className="form">
      <h2>Add Book</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <p>{message}</p>
    </div>
  );
};

AddBook.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default AddBook;
