import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaTree } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import '../styles/Rightmenu.css';

const InputSection = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <Row className="input-section">
            <Col>
                <Form className="input-form" onSubmit={handleSendMessage}>
                    <FaTree className="tree-icon" />
                    <Form.Control 
                        type="text" 
                        placeholder="Type a message..." 
                        className="message-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="primary" type="submit" className="send-button">
                        <AiOutlineSend className="send-icon" />
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default InputSection;
