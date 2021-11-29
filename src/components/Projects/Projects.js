import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <div className="my-projects py-5">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="project-card">
                            <Card>
                                <div className="project-img p-2">
                                    <Card.Img variant="top" src="https://sohelislamimran.netlify.app/static/media/Gerez.bc6d268c.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Gerez - Car Repair Services</Card.Title>
                                    <Card.Text>
                                        A full-stack single-page car repair web app where people can take and book services. Login system with firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their booking list.
                                    </Card.Text>
                                    <div className="links">
                                        <ul>
                                            <li >
                                                <a href="https://devsonket.com/" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://devsonket.com/" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-tools">
                                        <ul>
                                            <li>React.js</li>
                                            <li>React Bootstrap</li>
                                            <li>Node.js</li>
                                            <li>Express.js</li>
                                            <li>MongoDB</li>
                                            <li>Firebase Authentication</li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;