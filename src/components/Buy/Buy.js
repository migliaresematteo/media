import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sectionPIC from '../../assets/GSifwV9bQAAeEaG.jpeg';

const MediaTokenBuySection = () => {
    return (
        <div id='buy' className="bg-main">
            <Card className="container w-100 mx-auto bg-transparent border-0">
                <Card.Body className="text-light">
                    <Row className="align-items-stretch">
                        <Col
                            xs={12}
                            md={4}
                            className="media-column d-flex align-items-center justify-content-center order-md-1 mb-3 mb-md-0"
                        >
                            <img
                                src={sectionPIC}
                                alt="$MEDIA Token Buying Guide"
                                className="w-100"
                            />
                        </Col>
                        <Col xs={12} md={8} className="media-column order-md-2">
                            <Card.Title data-aos="fade-up" data-aos-delay="100" className="display-6 title fw-bold">
                                How to Buy $media
                            </Card.Title>
                            <Card.Text data-aos="fade-up" data-aos-delay="200" className="lead">
                                Purchasing $media tokens is a simple process designed to make your entry into our ecosystem smooth and straightforward.
                            </Card.Text>
                            <div data-aos="fade-up" data-aos-delay="300" className="mb-3">
                                <h5 className="text-light">Buying Steps:</h5>
                                <ul className="text-light pl-3 list-unstyled">
                                    <li>Set up a Phantom Wallet</li>
                                    <li>Purchase $media on supported decentralized exchanges</li>
                                    <li>Store your tokens securely in your Phantom Wallet</li>
                                </ul>
                            </div>
                            <div className="d-flex">
                                <a
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    className="text-light py-2 px-4 border border-1 border-light w-max text-decoration-none me-2"
                                    href="#"
                                    onClick={() => window.open('https://dexscreener.com', '_blank')}
                                >
                                    Buy on Dexscreener
                                </a>
                                <a
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    className="text-light py-2 px-4 border border-1 border-light w-max text-decoration-none"
                                    href="#"
                                    onClick={() => window.open('/beginners-guide', '_blank')}
                                >
                                    Beginner's Guide
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MediaTokenBuySection;