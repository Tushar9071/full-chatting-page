import React from 'react';
import LeftHeader from './LeftHeader';
import SearchBar from './Serchbar';
import UsersList from './Userlist';
import '../styles/Leftmenu.css';

function LeftMenu() {
  return (
    <div className="sidebar">
      <LeftHeader />
      <SearchBar />
      <UsersList />
    </div>
  );
}

export default LeftMenu;
