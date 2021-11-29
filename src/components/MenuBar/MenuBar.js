import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './MenuBar.css';

const MenuBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <>
        <Navbar 
        collapseOnSelect 
        expand="lg"
        variant="light" 
        fixed="top"
        className={(isSticky || isCollapsed) ? "shadow-sm bg-compaque py-2 navbar-stick" : "py-4"}>
            <Container>
                <Navbar.Brand 
                href="/home"
                >
                    <img width="40"
                    height="40"
                    className="d-inline-block align-top mr-2" src="https://i.ibb.co/s5qRPGQ/chandan-logo-removebg-preview.png" alt="" />
                    
                    </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/services">Skill</Nav.Link>
                        <Nav.Link href="/contact">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/contact">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default MenuBar;