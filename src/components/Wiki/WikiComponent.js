import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChartLine, faWallet, faShieldAlt, faBook, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './WikiComponent.css';

const WikiComponent = () => {
    const courses = [
        {
            title: "Crypto Basics for Beginners",
            icon: faBook,
            description: "Learn the fundamentals of cryptocurrency, blockchain technology, and digital assets.",
            topics: ["What is Cryptocurrency?", "Understanding Blockchain", "Types of Digital Assets", "Crypto Wallets"],
            level: "Beginner"
        },
        {
            title: "Safe Trading Practices",
            icon: faShieldAlt,
            description: "Master the essentials of secure trading and investment protection.",
            topics: ["Security Best Practices", "Avoiding Scams", "Portfolio Management", "Risk Assessment"],
            level: "Beginner"
        },
        {
            title: "Technical Analysis",
            icon: faChartLine,
            description: "Understand charts, trends, and technical indicators for better trading decisions.",
            topics: ["Reading Charts", "Key Indicators", "Market Trends", "Trading Patterns"],
            level: "Intermediate"
        },
        {
            title: "DeFi Fundamentals",
            icon: faWallet,
            description: "Explore decentralized finance and its revolutionary potential with a beginner-friendly approach.",
            topics: ["What is DeFi?", "Yield Farming", "Liquidity Pools", "Smart Contracts"],
            level: "Intermediate"
        }
    ];

    return (
        <div id="wiki" className="wiki-section py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">
                        <FontAwesomeIcon icon={faGraduationCap} className="me-3" />
                        Crypto Education Hub
                    </h2>
                    <p className="lead mb-4">
                        Start your crypto journey with our comprehensive guides and courses. 
                        While you learn, consider starting with $media - a beginner-friendly token 
                        on the Solana blockchain.
                    </p>
                    <div className="featured-box p-4 mb-5">
                        <h3 className="h4 mb-3">Why Start with $media?</h3>
                        <Row className="g-4">
                            <Col md={4}>
                                <div className="feature-item">
                                    <FontAwesomeIcon icon={faDollarSign} className="feature-icon mb-3" />
                                    <h4 className="h5">Low Entry Barrier</h4>
                                    <p>Start with minimal investment on Solana's low-fee network</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="feature-item">
                                    <FontAwesomeIcon icon={faShieldAlt} className="feature-icon mb-3" />
                                    <h4 className="h5">Community Support</h4>
                                    <p>Join a vibrant community of learners and experienced traders</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="feature-item">
                                    <FontAwesomeIcon icon={faChartLine} className="feature-icon mb-3" />
                                    <h4 className="h5">Growth Potential</h4>
                                    <p>Learn while participating in a promising project</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <h3 className="h4 mb-4 text-center">Available Courses</h3>
                <Row className="g-4">
                    {courses.map((course, index) => (
                        <Col md={6} key={index}>
                            <Card className="course-card h-100">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <FontAwesomeIcon icon={course.icon} className="course-icon me-3" />
                                        <div>
                                            <h4 className="h5 mb-1">{course.title}</h4>
                                            <span className={`badge ${course.level.toLowerCase()}`}>
                                                {course.level}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-3">{course.description}</p>
                                    <h5 className="h6 mb-2">Topics covered:</h5>
                                    <ul className="topics-list">
                                        {course.topics.map((topic, i) => (
                                            <li key={i}>{topic}</li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-outline-light mt-3">
                                        Start Learning
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WikiComponent;
