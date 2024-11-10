import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { FaEllipsisV, FaUserPlus } from 'react-icons/fa';
import host from '../Images/user.jpg';
import '../styles/Leftmenu.css';
import person1png from '../Images/user.jpg'

function LeftHeader({ addFriendToUserList ,userList}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const friends = [
    { id: 1, name: 'yugal patel', message: 'looks good', icon: person1png, online: true },
    { id: 2, name: 'Ashley Harris', message: 'lucky you', icon: 'person2.png', online: false },
    { id: 3, name: 'Andrew Wilson', message: 'same here', icon: 'person3.png', online: true },
    { id: 4, name: 'Jennifer Brown', message: 'wait a second', icon: 'person4.png', online: false },
    { id: 5, name: 'Edward Davis', message: "how's it going?", icon: 'person5.png', online: true },
    { id: 6, name: 'Karen Wilson', message: 'i hear you', icon: 'person6.png', online: false },
    { id: 7, name: 'Joseph Garcia', message: "at least it's friday", icon: 'person7.png', online: true },
    { id: 8, name: 'Patricia Jones', message: 'what about you?', icon: 'person8.png', online: false },
    { id: 9, name: 'shubham kagathara', message: 'i love it', icon: 'person9.png', online: true },
    { id: 10, name: 'David Johnson', message: 'how about you?', icon: 'person10.png', online: false },
    { id: 11, name: 'jaydeep popat', message: 'good morning', icon: 'person11.png', online: true },
    { id: 12, name: 'Tushar rajapara', message: 'hello', icon: 'person12.png', online: true },
    { id: 13, name: 'Sarah Wilson', message: 'how are you?', icon: 'person13.png', online: false },
    { id: 14, name: 'Daniel Johnson', message: 'i am good', icon: 'person14.png', online: true },
    { id: 15, name: 'Kyle Williams', message: 'good morning', icon: 'person15.png', online: true },
    { id: 16, name: 'harsh bhuva', message: 'how are you?', icon: 'person16.png', online: false },
    { id: 17, name: 'David Davis', message: 'good morning', icon: 'person17.png', online: true },
    { id: 18, name: 'pratik patel', message: 'good morning', icon: 'person18.png', online: true },
    { id: 19, name: 'jeet bhalodi', message: 'how are you?', icon: 'person19.png', online: false },
    { id: 20, name: 'abhay jakasaniya', message: 'good morning', icon: 'person20.png', online: true },

    ];

   // Filter friends to exclude those already in userList
   const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !userList.some(user => user.id === friend.id) // Exclude users already in userList
  );

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeDropdown = () => setShowDropdown(false);
  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleAddFriend = (friend) => {
    addFriendToUserList(friend);
  };

  return (
    <div className={`header-container ${showDropdown ? 'show-dropdown' : ''}`}>
      <div className="header">
        <Image src={host} roundedCircle className="profile-icon" />
        <h5>yugal jakasaniya</h5>
        <div className="lefticons">
          <FaUserPlus className="leftheader-icon add-user-icon" title="Add User" onClick={toggleDropdown} />
          <FaEllipsisV className="leftheader-icon" />
        </div>
      </div>

      {showDropdown && (
        <div className="dropdown-menu glass-effect" onMouseLeave={closeDropdown}>
          <input
            type="text"
            className="dropdown-search-bar"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul className="friends-list">
            {filteredFriends.map(friend => (
              <li key={friend.id} className="friend-item">
                <div className="friend-icon-container">
                  <Image src={friend.icon} className="friend-icon" roundedCircle />
                  {friend.online && <span className="friend-online-dot"></span>}
                </div>
                <div className="friend-info">
                  <h6 className="friend-name">{friend.name}</h6>
                  <p className="friend-message">{friend.message}</p>
                </div>
                <FaUserPlus
                  className="add-friend-icon"
                  onClick={() => handleAddFriend(friend)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


export default LeftHeader;






