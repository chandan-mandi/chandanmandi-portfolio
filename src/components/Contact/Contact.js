import React, { useEffect } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [state, handleSubmit] = useForm("mayvwbrq");
    useEffect(() => {
        if (state.succeeded) {
            return toast.success('Thank You for Your valuable Feedback!');

        }
    }, [state.succeeded])
    return (
        <div className="contact-section py-5" id="contact">
            <Container className="py-3">
                <div className="pb-3">
                    <h2 className="text-center">Get In Touch</h2>
                    <div className="divider">
                        <span></span>
                    </div>
                </div>
                <Row className="py-3">
                    <Col md={6} sm={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control name="name" type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control name="email" type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control name="message" as="textarea" placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="outline-success" type="submit">Send Message</Button>
                        </Form>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="intro-img">
                            <img src="" alt="" />
                        </div>
                    </Col>
                </Row>
                <Toaster />
            </Container>
        </div>
    );
};

export default Contact;