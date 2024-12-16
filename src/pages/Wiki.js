import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGraduationCap, 
    faChartLine, 
    faWallet, 
    faShieldAlt, 
    faBook, 
    faDollarSign,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Wiki.css';

const WIKI_HEADER = [
    {
        title: "Learn Crypto Trading",
        subtitle: "Start your journey into cryptocurrency with our comprehensive guides",
        anchor: "Start Learning",
        href: "#courses"
    }
];

const Wiki = () => {
    const courses = [
        {
            title: "Crypto Basics for Beginners",
            icon: faBook,
            description: "Learn the fundamentals of cryptocurrency, blockchain technology, and digital assets.",
            topics: ["What is Cryptocurrency?", "Understanding Blockchain", "Types of Digital Assets", "Crypto Wallets"],
            level: "Beginner",
            path: "/wiki/crypto-basics"
        },
        {
            title: "Safe Trading Practices",
            icon: faShieldAlt,
            description: "Master the essentials of secure trading and investment protection.",
            topics: ["Security Best Practices", "Avoiding Scams", "Portfolio Management", "Risk Assessment"],
            level: "Beginner",
            path: "/wiki/safe-trading"
        },
        {
            title: "Technical Analysis",
            icon: faChartLine,
            description: "Understand charts, trends, and technical indicators for better trading decisions.",
            topics: ["Reading Charts", "Key Indicators", "Market Trends", "Trading Patterns"],
            level: "Intermediate",
            path: "/wiki/technical-analysis"
        },
        {
            title: "DeFi Fundamentals",
            icon: faWallet,
            description: "Explore decentralized finance and its revolutionary potential with a beginner-friendly approach.",
            topics: ["What is DeFi?", "Yield Farming", "Liquidity Pools", "Smart Contracts"],
            level: "Intermediate",
            path: "/wiki/defi"
        }
    ];

    return (
        <>
            <div className="wiki-header pageHeader relative overflow-hidden border-bottom border-1 border-light">
                <Container className="py-5">
                    <Row className="min-vh-100 align-items-center">
                        <Col md={8} className="mx-auto text-center">
                            <h1 className="display-3 fw-bold text-light mb-4 animate-slide-in">
                                <FontAwesomeIcon icon={faGraduationCap} className="me-3" />
                                Crypto Education Hub
                            </h1>
                            <p className="lead text-light opacity-75 mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                                Start your crypto journey with our comprehensive guides and courses.
                                While you learn, consider starting with $media - a beginner-friendly token
                                on the Solana blockchain.
                            </p>
                            <a 
                                href="#courses"
                                rel="noreferrer"
                                className='d-block text-light mx-auto py-2 px-4 border border-1 border-light w-max text-decoration-none animate-slide-in'
                                style={{ animationDelay: '0.4s' }}
                            >
                                Start Learning
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="courses" className="wiki-content py-5">
                <Container>
                    <div className="featured-box p-4 mb-5 animate-slide-in">
                        <h3 className="h4 mb-3 text-center">Why Start with $media?</h3>
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

                    <h3 className="h4 mb-4 text-center">Available Courses</h3>
                    <Row className="g-4">
                        {courses.map((course, index) => (
                            <Col md={6} key={index}>
                                <Card className="course-card text-light h-100 animate-slide-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
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
                                        <Link to={course.path} className="d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none animate-slide-in">
                                            Start Course <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Wiki;
