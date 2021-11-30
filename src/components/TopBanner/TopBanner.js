import React from 'react';
import './TopBanner.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const TopBanner = () => {
    return (
        <div className="intro-area">
            <Container className="py-5">
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
                            <div className="follow-me d-flex mb-3">
                                <div className="follow-me-icon mr-3">
                                    <a href="https://github.com/chandan-mandi" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="follow-me-icon mr-3">
                                    <a href="https://www.linkedin.com/in/chandan-mandi" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="follow-me-icon mr-3">
                                    <a href="https://twitter.com/MandiChandan" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="follow-me-icon mr-3">
                                    <a href="https://www.facebook.com/chandan.mandi.3" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="follow-me-icon mr-3">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.chandanmandi@gmail.com" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </a>
                                </div>
                               
                            </div>
                            <Button variant="success" target="_blank" href="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/Chandan%20Mandi%20-%20Resume.pdf" download>Get Resume</Button>
                            <Button variant="outline-success" href="#about">About Me</Button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="intro-img">
                            <img src="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/intro-image.png" alt="intro-imag" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;