import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

const AddBook = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBookItem(title, author, category);
      setTitle('');
      setAuthor('');
      setCategory('');
      setMessage('');
    } else {
      setMessage('Please fill all the fields');
    }
  };

  return (
    <div className="form">
      <h2 className="form-title">add new book</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="author-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="empty">Category</option>
          <option value="Action">Action</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input className="submit" type="submit" value="Add Book" />
      </form>
      <p className="error">{message}</p>
    </div>
  );
};

AddBook.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default AddBook;
