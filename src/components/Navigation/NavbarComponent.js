import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent({ navLinks }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.replace('#', '')).filter(id => id !== '/');
            for (let section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled, navLinks]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Navbar 
            expand="lg" 
            className={`blur border-bottom border-1 border-light py-3 fixed-top w-100 transition-all ${scrolled ? 'bg-dark bg-opacity-75' : ''}`}
            variant="dark"
        >
            <Container>
                <Navbar.Brand 
                    className="text-light d-flex justify-content-center align-items-center animate-pulse" 
                    href="#home"
                    onClick={(e) => handleNavClick(e, '/')}
                >
                    <span><b>$media</b><span className="opacity-50"> on Solana</span></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FontAwesomeIcon icon={faBars} className="text-light" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navLinks.map((link) => (
                            <Nav.Link 
                                key={link.id} 
                                className={`me-2 ms-2 ms-lg-0 my-2 my-lg-0 text-light nav-link-hover position-relative ${
                                    activeLink === link.href.replace('#', '') ? 'active' : ''
                                }`}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                <span className="me-2 icon-hover">{link.icon}</span>
                                {link.title}
                                <div className="nav-link-indicator"></div>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
