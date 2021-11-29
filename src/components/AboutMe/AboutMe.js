import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div className="about-me py-5" id="about">
            <Container className="py-5">
                <h2 className="text-center pb-4">About Me</h2>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="about-text">
                        <p>Hello! I'm Chandan Mandi, a passionate software engineer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.</p>
                        <Button variant="success" target="_blank" href="https://github.com/chandan-mandi/chandanmandi-portfolio/raw/main/src/assets/Chandan%20Mandi%20-%20Resume.pdf" download>Get Resume</Button>
                        <Button variant="outline-success" href="#portfolio">My Portfolio</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="about-img">
                            <img src="https://i.ibb.co/XYL8ddz/chandan-image.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;