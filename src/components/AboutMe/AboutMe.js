import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div className="about-me py-5" id="about">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="about-text">
                        <p>Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>
                        <Button variant="success">Get Resume</Button>
                        <Button variant="outline-success">My Skills</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="about-img">
                            <img src="https://andibabu.com/wp-content/uploads/2021/06/Title.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;