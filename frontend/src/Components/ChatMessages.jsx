import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Rightmenu.css';
import InputSection from './InputSection';

const MessageSection = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello', sender: 'other' },
    { text: 'How are you?', sender: 'other' },
    { text: "I'm good, thanks!", sender: 'user' },
  ]);

  const messageEndRef = useRef(null);

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, sender: 'user' }]);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Row className="message-section">
        <Col>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user' ? 'sent' : 'other'}`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messageEndRef} /> {/* Scroll-to-bottom element */}
        </Col>
      </Row>
      <InputSection onSendMessage={handleSendMessage} />
    </>
  );
};

export default MessageSection;
