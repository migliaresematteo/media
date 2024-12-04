import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sectionPIC from '../../assets/GSifwV9bQAAeEaG.jpeg';

const MediaMissionComponent = () => {
    return (
        <div id="mission" className="bg-main border-top border-1 border-light">
            <Card className="container w-100 mx-auto bg-transparent border-0">
                <Card.Body className="text-light">
                <Row className="align-items-stretch">
                    <Col
                        xs={12}
                        md={4}
                        className="media-column d-flex align-items-center justify-content-center order-md-2 mb-3 mb-md-0"
                    >
                        <img
                            src={sectionPIC}
                            alt="Media Mission Illustration"
                            className="w-100"
                        />
                    </Col>
                    <Col xs={12} md={8} className="media-column order-md-1">
                        <Card.Title data-aos="fade-up" data-aos-delay="100" className="display-6 title fw-bold">
                            Our Mission: Empowering Truth and Freedom in Citizen Journalism
                        </Card.Title>
                        <Card.Text data-aos="fade-up" data-aos-delay="200" className="lead">
                            $media is more than a cryptocurrency: it's a global movement. Our mission is to connect and financially empower journalists, influencers, fact-checkers, YouTubers, and content creators who excel in promoting freedom of expression and truthful information. By donating 20 million tokens, we aim to build a community that bridges these entities across the world, creating a stronger network for credible citizen journalism.
                        </Card.Text>
                        <a  data-aos="fade-up" data-aos-delay="300"
                            className="d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none"
                            href="#"
                        >
                            Learn how to become a partner
                        </a>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MediaMissionComponent;
