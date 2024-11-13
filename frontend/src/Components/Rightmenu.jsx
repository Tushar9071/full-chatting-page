import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderSection from './RightHeader';
import MessageSection from './ChatMessages';
import '../styles/Rightmenu.css';
import { FaWhatsapp } from 'react-icons/fa'; // Example icon import

const RightPanel = ({ selectedFriend }) => {
  
  return (
    <Container fluid className="right-panel">
      {selectedFriend ? (
        <>
          <HeaderSection friend={selectedFriend} />
          <MessageSection friend={selectedFriend} />
        </>
      ) : (
        <div className="no-selection-container">
          <div className="no-selection">
            <div className="icon">
              <FaWhatsapp /> {/* Replace with your preferred icon */}
            </div>
            <div className="main-text">ChattingApp for Windows</div>
            <div className="sub-text">
            Stay connected across all your devices, even when your phone is offline.
              <br />
              Please select a friend to view your chat history and start messaging.
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RightPanel;
