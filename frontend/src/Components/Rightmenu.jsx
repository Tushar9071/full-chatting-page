import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderSection from './RightHeader';
import MessageSection from './ChatMessages';
import InputSection from './InputSection';
import '../styles/Rightmenu.css';

const RightPanel = () => {
    return (
        <Container fluid className="right-panel">
            <HeaderSection />
            <MessageSection />
           
        </Container>
    );
};

export default RightPanel;
