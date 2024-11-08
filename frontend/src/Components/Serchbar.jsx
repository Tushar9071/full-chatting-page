import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/Leftmenu.css';

function SearchBar() {
  return (
    <form className="search-bar-form">
      <FaUser className="left-search-icon" />
      <input type="text" className="search-bar" placeholder="Search" />
    </form>
  );
}

export default SearchBar;
