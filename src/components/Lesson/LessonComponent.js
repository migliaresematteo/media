import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './LessonComponent.css';

const LessonComponent = ({ lesson }) => {
    return (
        <div className="lesson-page">
            <div className="lesson-header pageHeader d-flex justify-content-center align-items-center border-bottom border-1 border-light">
                <Container className="py-5">
                    <div className="header-content text-center">
                        <Link to="/wiki" className="back-link mb-4 d-inline-block">
                            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                            Back to Courses
                        </Link>
                        <h1 className="display-4 fw-bold text-light mb-4 animate-slide-in">
                            {lesson.title}
                        </h1>
                        <p className="lead text-light opacity-75 mb-4 animate-slide-in mx-auto" style={{ maxWidth: '800px', animationDelay: '0.2s' }}>
                            {lesson.description}
                        </p>
                        <div className="lesson-meta animate-slide-in" style={{ animationDelay: '0.3s' }}>
                            <span className="me-4">
                                <strong>Duration:</strong> {lesson.duration}
                            </span>
                            <span>
                                <strong>Difficulty:</strong> {lesson.difficulty}
                            </span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="lesson-content py-5">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div className="content-box p-4 animate-slide-in">
                                {lesson.content.map((section, index) => (
                                    <div key={index} className="mb-5">
                                        <h2 className="h3 mb-4">{section.title}</h2>
                                        {section.paragraphs.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="mb-4">{paragraph}</p>
                                        ))}
                                        {section.tips && (
                                            <div className="tip-box p-3 mb-4">
                                                <h4 className="h5 mb-3">💡 Pro Tips:</h4>
                                                <ul className="tip-list">
                                                    {section.tips.map((tip, tIndex) => (
                                                        <li key={tIndex}>{tip}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default LessonComponent;
