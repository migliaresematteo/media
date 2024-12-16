import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
return (
    <footer id='footer' className="bg-black border-top border-1 border-light text-light py-4">
    <Container>
        <Row className="align-items-center justify-content-between">
        <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start">
            <a 
                href="https://x.com/mediaonsolana?s=21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-3 mx-md-0"
            >
                <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
            </a>
            <a 
                href="https://t.me/youarethemedianowonsol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light mx-3  mx-md-0 ms-md-4"
            >
            <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
            </a>
            </div>
        </Col>
        <Col md={4} className="text-center mb-3 mb-md-0">
            <a 
            href="https://dexscreener.com/solana/5e4pdnmb1wqwkzzvr3o3fvhwnbscffaivexq3capygkq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-auto d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none"
            >
            DexScreener
            </a>
        </Col>
        <Col md={4} className="text-center text-md-end">
            <p className="mb-0">&copy; {new Date().getFullYear()} $media</p>
        </Col>
        </Row>
    </Container>
    </footer>
);
};

export default Footer;