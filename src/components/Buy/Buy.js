import React, { useState } from 'react';
import { Card, Row, Col, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sectionPIC from '../../assets/GSifwV9bQAAeEaG.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCoins, faExchangeAlt, faExternalLinkAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ActionLink = ({ href, children }) => (
    <a
        href={href}
        target='_blank'
        rel="noreferrer"
        className='d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none animate-slide-in'
        style={{ animationDelay: '0.4s' }}
    >
        {children}
    </a>
);

const BuyStep = ({ step, index, isActive, onStepClick }) => (
    <div
        className={`buy-step p-3 rounded-3 mb-3 h-100 animate-slide-in ${isActive ? 'active' : ''}`}
        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
        onClick={onStepClick}
    >
        <div className="d-flex flex-column h-100 align-items-center text-center">
            <div className="step-content">
                <div className="step-icon-wrapper mb-3">
                    <div className="icon-circle display-6">
                        <FontAwesomeIcon icon={step.icon} className="step-icon" />
                    </div>
                </div>
                <h5 className="mb-3">{step.title}</h5>
                <p className="mb-3 opacity-75 small">{step.description}</p>
            </div>
            <div className="mt-auto ">
                {index === 0 && <ActionLink href="#">Get Phantom Wallet</ActionLink>}
                {index === 1 && <ActionLink href="https://accounts.binance.com/register?ref=CZ5GMC79">Binance</ActionLink>}
                {index === 2 && (
                    <div className="d-flex gap-2">
                        <ActionLink href="https://dexscreener.com/swap/solana/5E4pdNMB1wqwkzZVR3o3FvHWNbsCFfaiVExq3CApYGkq?embed=1&theme=dark&dsApp=1">Raydium</ActionLink>
                    </div>
                )}
            </div>
        </div>
    </div>
);

const MediaTokenBuySection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const buySteps = [
        {
            icon: faWallet,
            title: "Connect Your Wallet",
            description: "Install and connect your wallet to get started"
        },
        {
            icon: faCoins,
            title: "Get SOL",
            description: "Purchase SOL from an exchange and send it to your wallet"
        },
        {
            icon: faExchangeAlt,
            title: "Swap for MEDIA",
            description: "Use Raydium to swap SOL for MEDIA tokens"
        }
    ];

    const faqs = [
        {
            question: "What is MEDIA token?",
            answer: "$media is a memecoin developed on the Solana blockchain network with the mission to empower citizen journalism and content creation."
        },
        {
            question: "Why do I need Phantom wallet?",
            answer: "Phantom is a user-friendly Solana wallet that allows you to securely store, send, receive, and swap tokens on the Solana blockchain."
        },
        {
            question: "What are the fees involved?",
            answer: "Transaction fees on Solana are minimal, typically less than $0.01. Exchange fees may vary depending on the platform and trading volume."
        },
        {
            question: "Is my investment safe?",
            answer: "While we implement strong security measures, cryptocurrency investments carry inherent risks. Always do your research and never invest more than you can afford to lose."
        }
    ];

    return (
        <div id="buy" className="bg-main pb-5">
            <Card className="container w-100 mx-auto bg-transparent border-0">
                <Card.Body className="text-light">
                    <Row className="align-items-stretch">
                        <Col xs={12}>
                            <Row className="buy-steps mb-4">
                                {buySteps.map((step, index) => (
                                    <Col xs={12} md={4} key={step.title}>
                                        <BuyStep
                                            step={step}
                                            index={index}
                                            isActive={activeStep === index}
                                            onStepClick={() => setActiveStep(index)}
                                        />
                                    </Col>
                                ))}
                            </Row>

                            <div className="faq-section animate-slide-in" style={{ animationDelay: '0.7s' }}>
                                <h5 className="mb-3 text-center">
                                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                                    Frequently Asked Questions
                                </h5>
                                <Accordion className="custom-accordion">
                                    {faqs.map((faq, index) => (
                                        <Accordion.Item key={index} eventKey={index.toString()}>
                                            <Accordion.Header>{faq.question}</Accordion.Header>
                                            <Accordion.Body>{faq.answer}</Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MediaTokenBuySection;