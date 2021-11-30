import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className="skills-section py-5" id="skills">
            <Container className="py-5">
                <h2 className="text-center">MY SKILLS</h2>
                <div className="divider">
                    <span></span>
                </div>
                <Row className="py-4">
                    <Col md={6} sm={12}>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>HTML</h3>
                                <h3>90%</h3>
                            </div>
                            <ProgressBar variant="success" now={90} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>CSS</h3>
                                <h3>90%</h3>
                            </div>
                            <ProgressBar variant="success" now={90} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>BOOTSTRAP</h3>
                                <h3>95%</h3>
                            </div>
                            <ProgressBar variant="success" now={95} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>JAVACRIPT</h3>
                                <h3>85%</h3>
                            </div>
                            <ProgressBar variant="success" now={85} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>JQUERY</h3>
                                <h3>95%</h3>
                            </div>
                            <ProgressBar variant="success" now={95} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>REACT</h3>
                                <h3>80%</h3>
                            </div>
                            <ProgressBar variant="success" now={80} />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>MONGO DB</h3>
                                <h3>85%</h3>
                            </div>
                            <ProgressBar variant="success" now={85} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>EXPRESS JS</h3>
                                <h3>80%</h3>
                            </div>
                            <ProgressBar variant="success" now={80} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>NODE JS</h3>
                                <h3>75%</h3>
                            </div>
                            <ProgressBar variant="success" now={75} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>FIREBASE</h3>
                                <h3>80%</h3>
                            </div>
                            <ProgressBar variant="success" now={80} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>HEROKU</h3>
                                <h3>75%</h3>
                            </div>
                            <ProgressBar variant="success" now={75} />
                        </div>
                        <div className="skill-box">
                            <div className="skill-text d-flex justify-content-between">
                                <h3>GITHUB</h3>
                                <h3>90%</h3>
                            </div>
                            <ProgressBar variant="success" now={90} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;