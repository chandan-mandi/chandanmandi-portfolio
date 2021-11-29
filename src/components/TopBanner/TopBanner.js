import React from 'react';
import './TopBanner.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className="intro-area">
            <Container>
                <Row>
                    <Col lg={8} md={8} sm={6} xs={12}>
                        <div className="intro-text">
                            <p>Hello! I am</p>
                            <h1>Chandan Mandi</h1>
                            <h3>Front-End Developer</h3>
                            <ul>
                                <li>Web Developer</li>
                                <li>Programmer</li>
                                <li>Software</li>
                            </ul>
                            <Button variant="success" target="_blank" href="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/Chandan%20Mandi%20-%20Resume.pdf" download>Get Resume</Button>
                            <Button variant="outline-success">About Me</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;