import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <nav>
    <a href="#/" className="logo">
      BookStore CMS
    </a>
    <ul className="nav-links">
      <li>
        <Link to="/">books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <button className="profile" type="button">
      <FontAwesomeIcon icon={faUser} />
    </button>
  </nav>
);

export default Navigation;
