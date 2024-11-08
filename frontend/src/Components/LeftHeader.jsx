import React from 'react';
import { Image } from 'react-bootstrap';
import { FaEllipsisV, FaUserPlus } from 'react-icons/fa';
import host from '../Images/user.jpg';
import '../styles/Leftmenu.css';

function LeftHeader() {
  return (
    <div className="header">
      <Image src={host} roundedCircle className="profile-icon" />
      <h5>yugal jakasaniya</h5>
      <div className="lefticons">
        <FaUserPlus className="leftheader-icon add-user-icon" title="Add User" />
        <FaEllipsisV className="leftheader-icon" />
        
      </div>
    </div>
  );
}

export default LeftHeader;
