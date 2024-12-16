import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGlobe, faChartLine, faCubes } from '@fortawesome/free-solid-svg-icons';
import './Roadmap.scss';

const Roadmap = () => {
    const roadmapData = [
        {
            quarter: 'Q4 2024',
            icon: faRocket,
            title: 'Community Building & Infrastructure',
            text: `From now until the end of 2024, $media is focused on building a strong community. 
            We are onboarding our first partners, growing our presence on X and Telegram, 
            and establishing the infrastructure to support the distribution of 20 million tokens to content creators and organizations promoting truth in citizen journalism.`,
        },
        {
            quarter: 'Q1 2025',
            icon: faGlobe,
            title: 'Global Expansion & Distribution',
            text: `Launch of the interactive global map. 
            First token distributions to selected creators and organizations. 
            Marketing campaigns targeting X, YouTube, and Telegram.`,
        },
        {
            quarter: 'Q2 2025',
            icon: faChartLine,
            title: 'Market Integration & Staking',
            text: `Listing on CoinGecko and CoinMarketCap. 
            Expansion of the global creator community.`,
        },
        {
            quarter: 'Q3 2025',
            icon: faCubes,
            title: 'NFTs & Exchange Listings',
            text: `Launch of NFTs to support creators. 
            Listing on centralized exchanges.`,
        },
    ];

    return (
        <div id='roadmap' className="roadmap-section py-5">
            <Container>
                <h2 data-aos="fade-up" className="text-center title display-6 fw-bold mb-5">Roadmap of $MEDIA</h2>
                
                <div className="roadmap-timeline">
                    {roadmapData.map((item, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="roadmap-item"
                        >
                            <div className="roadmap-content">
                                <div className="quarter-badge">
                                    <FontAwesomeIcon icon={item.icon} className="icon" />
                                    <span>{item.quarter}</span>
                                </div>
                                <div className="content-box">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Roadmap;
