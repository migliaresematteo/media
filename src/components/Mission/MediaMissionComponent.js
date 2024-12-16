import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaMissionComponent.scss';
import sectionPIC from '../../assets/vidd.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHandshake, faUsers, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const MediaMissionComponent = () => {
    return (
        <div id="mission" className="mission-section bg-main border-top border-1 border-light">
            <Card className="container w-100 mx-auto bg-transparent border-0">
                <Card.Body className="text-light">
                    <Row className="align-items-stretch mb-5">
                        <Col xs={12} md={4} className="media-column d-flex align-items-center justify-content-center order-md-2 mb-3 mb-md-0">
                            <video
                                src={sectionPIC}
                                alt="Media Mission Illustration"
                                className="w-100 rounded-4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </Col>
                        <Col xs={12} md={8} className="media-column order-md-1">
                            <Card.Title data-aos="fade-up" data-aos-delay="100" className="display-6 title fw-bold">
                                Our Mission: Empowering Truth and Freedom in Media
                            </Card.Title>
                            <Card.Text data-aos="fade-up" data-aos-delay="200" className="lead">
                                $MEDIA is more than a cryptocurrency - it's a movement to democratize media and empower independent voices. We're building a community where truth, transparency, and community drive the future of information sharing.
                            </Card.Text>
                        </Col>
                    </Row>

                    <Row className="mission-cards g-4 mb-5">
                        <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="100">
                            <div className="mission-card text-center">
                                <FontAwesomeIcon icon={faBullhorn} className="mission-icon" />
                                <h3>Amplify Voices</h3>
                                <p>We are planning to feature weekly stories on X (formerly Twitter) from individuals with important messages that deserve to be heard, empowering voices that might otherwise go unnoticed.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="200">
                            <div className="mission-card text-center">
                                <FontAwesomeIcon icon={faHandshake} className="mission-icon" />
                                <h3>Support Creators</h3>
                                <p>We pledge 2% of our token supply to content creators committed to verified news and independent journalism, fostering truthful, unbiased information.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="300">
                            <div className="mission-card text-center">
                                <FontAwesomeIcon icon={faUsers} className="mission-icon" />
                                <h3>Build Community</h3>
                                <p>Our Telegram community serves as a vibrant hub for journalists, creators, and activists to network, collaborate, and form partnerships.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} data-aos="fade-up" data-aos-delay="400">
                            <div className="mission-card text-center">
                                <FontAwesomeIcon icon={faEarthAmericas} className="mission-icon" />
                                <h3>Decentralize Media</h3>
                                <p>We're dismantling traditional media barriers, ensuring information remains free, accessible, and unmanipulated for everyone.</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MediaMissionComponent;