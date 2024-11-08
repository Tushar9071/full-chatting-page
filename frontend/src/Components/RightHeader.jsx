import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FaVideo, FaPhone } from 'react-icons/fa';
import '../styles/Rightmenu.css';
import friend1 from '../Images/user.jpg'
const HeaderSection = () => {
    return (
        <Row className="header-section align-items-center">
            <Col xs="auto">
                <Image 
                    src={friend1}
                    roundedCircle 
                    className="profile-pic" 
                    alt="Profile"
                />
            </Col>
            <Col>
                <h2 className="profile-name">Maria Nelson</h2>
                <p className="profile-status">Grateful for every sunrise and sunset</p>
            </Col>
            <Col xs="auto" className="icons">
                <FaVideo className="header-icon" />
                <FaPhone className="header-icon" />
            </Col>
        </Row>
    );
};

export default HeaderSection;
