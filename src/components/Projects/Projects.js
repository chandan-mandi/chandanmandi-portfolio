import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
    return (
        <div className="my-projects py-5" id="portfolio">
            <Container className="py-5">
                <h2 className="text-center">PORTFOLIO</h2>
                <div className="divider">
                    <span></span>
                </div>
                <Row className="py-4">
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="project-card">
                            <Card>
                                <div className="project-img p-2">
                                    <Card.Img variant="top" src="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/hot-wheels.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>HotWheels - Buy Second-Hand Cars.</Card.Title>
                                    <Card.Text>
                                        HotWhells is the one-stop solution if you want to buy used cars online in India
                                        as you can get competitive prices for models of your choice.
                                    </Card.Text>
                                    <div className="links">
                                        <ul>
                                            <li >
                                                <a href="https://hot-wheels-d4134.web.app/" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/chandan-mandi/hot-wheels-client" target="_blank" rel="noreferrer">
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
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="project-card">
                            <Card>
                                <div className="project-img p-2">
                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/chandan-mandi/chandanmandi-portfolio/main/src/assets/eventsmaker.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Events-Maker - Event Manage.</Card.Title>
                                    <Card.Text>
                                        determined to make your special day a memorable one. You can book your Event online by choosing it according to your budget.
                                    </Card.Text>
                                    <div className="links">
                                        <ul>
                                            <li >
                                                <a href="https://events-maker.web.app/" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/chandan-mandi/events-maker" target="_blank" rel="noreferrer">
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
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className="project-card">
                            <Card>
                                <div className="project-img p-2">
                                    <Card.Img variant="top" src="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/holidify.png" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Holidify - Hotel booking engine.</Card.Title>
                                    <Card.Text>
                                        Holidify is India’s travel website, offering you the best prices on hotels
                                        and holiday packages across India and the world.
                                    </Card.Text>
                                    <div className="links">
                                        <ul>
                                            <li >
                                                <a href="https://holidify-11f01.web.app/" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/chandan-mandi/holidify-client-side" target="_blank" rel="noreferrer">
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
                    <div className="text-center mt-3">
                        <Button variant="success">View More</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;