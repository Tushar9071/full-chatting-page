import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import person1png from '../Images/user.jpg';
import '../styles/Leftmenu.css';

const users = [
  { name: 'Maria Nelson', message: 'looks good', icon: person1png, online: true },
  { name: 'Ashley Harris', message: 'lucky you', icon: 'person2.png', online: false },
  { name: 'Andrew Wilson', message: 'same here', icon: 'person3.png', online: true },
  { name: 'Jennifer Brown', message: 'wait a second', icon: 'person4.png', online: false },
  { name: 'Edward Davis', message: "how's it going?", icon: 'person5.png', online: true },
  { name: 'Karen Wilson', message: 'i hear you', icon: 'person6.png', online: false },
  { name: 'Joseph Garcia', message: "at least it's friday", icon: 'person7.png', online: true },
  { name: 'Patricia Jones', message: 'what about you?', icon: 'person8.png', online: false },
  { name: 'Maria Nelson', message: 'looks good', icon: person1png, online: true },
  { name: 'Ashley Harris', message: 'lucky you', icon: 'person2.png', online: false },
  { name: 'Andrew Wilson', message: 'same here', icon: 'person3.png', online: true },
  { name: 'Jennifer Brown', message: 'wait a second', icon: 'person4.png', online: false },
  { name: 'Edward Davis', message: "how's it going?", icon: 'person5.png', online: true },
  { name: 'Karen Wilson', message: 'i hear you', icon: 'person6.png', online: false },
  { name: 'Joseph Garcia', message: "at least it's friday", icon: 'person7.png', online: true },
  { name: 'Patricia Jones', message: 'what about you?', icon: 'person8.png', online: false },
  // Add more users as needed
];

function UsersList() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user.name === selectedUser ? null : user.name);
  };

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <div
            className={`sidebar-item ${selectedUser === user.name ? 'selected' : ''}`}
            onClick={() => handleUserClick(user)}
            style={{ cursor: 'pointer' }}
          >
            <div className="user-icon-container">
              <Image
                src={user.icon}
                roundedCircle
                className="user-icon"
              />
              {user.online && <span className="online-dot"></span>}
            </div>
            <div className="user-info">
              <h6 className="user-name">{user.name}</h6>
              <p>{user.message}</p>
            </div>
          </div>
          {index < users.length - 1 && <hr className="user-separator" />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default UsersList;
