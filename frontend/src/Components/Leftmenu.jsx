// LeftMenu.js
import React, { useState } from 'react';
import LeftHeader from './LeftHeader';
import SearchBar from './Serchbar';
import UsersList from './Userlist';
import '../styles/Leftmenu.css';
import icon1 from '../Images/user.jpg'

function LeftMenu({ setSelectedFriend }) {
  const [searchTerm, setSearchTerm] = useState('');

  const predefinedUsers = [
    { id: 1, name: 'Yugal Patel', online: true, icon: icon1, message: 'Hello there!' },
    { id: 2, name: 'Tushar', online: false, icon: '/path/to/icon.jpg', message: 'Available for a call?' },
    // Add more users as needed
  ];

  const [userList, setUserList] = useState(predefinedUsers);

  const addFriendToUserList = (friend) => {
    if (!userList.some(user => user.id === friend.id)) {
      setUserList((prevList) => [...prevList, friend]);
    }
  };

  return (
    <div className="sidebar">
      <LeftHeader addFriendToUserList={addFriendToUserList} userList={userList} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UsersList searchTerm={searchTerm} users={userList} setSelectedFriend={setSelectedFriend} />
    </div>
  );
}

export default LeftMenu;
