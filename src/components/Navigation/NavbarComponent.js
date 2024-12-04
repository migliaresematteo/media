import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent({ navLinks }) {
    return (
        <Navbar expand="lg" className="blur border-bottom border-1 border-light py-3 fixed-top w-100">
            <Container>
                <Navbar.Brand className="text-light d-flex justify-content-center align-items-center" href="#home">
                    <span><b>$media</b><span className="opacity-50"> on Solana</span></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} className="text-light" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navLinks.map((link) => (
                            <Nav.Link key={link.id} className="me-2 ms-2 ms-lg-0 my-2 my-lg-0 text-light" href={link.href}>
                                <span className="me-2">{link.icon}</span>
                                {link.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
