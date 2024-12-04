import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Roadmap = () => {
const roadmapData = [
    {
    quarter: 'Q4 2024',
    text: `From now until the end of 2024, $media is focused on building a strong community. 
    We are onboarding our first partners, growing our presence on X and Telegram, 
    and establishing the infrastructure to support the distribution of 20 million tokens to content creators and organizations promoting truth in citizen journalism.`,
    },
    {
    quarter: 'Q1 2025',
    text: `Launch of the interactive global map. 
    First token distributions to selected creators and organizations. 
    Marketing campaigns targeting X, YouTube, and Telegram.`,
    },
    {
    quarter: 'Q2 2025',
    text: `Listing on CoinGecko and CoinMarketCap. 
    Development of a staking system for $media holders. 
    Expansion of the global creator community.`,
    },
    {
    quarter: 'Q3 2025 and beyond',
    text: `Launch of NFTs to support creators. 
    Listing on centralized exchanges.`,
    },
];

return (
    <div id='roadmap' className="bg-main py-5 text-light">
    <h2 data-aos="fade-up" className="text-center title display-6 fw-bold mb-4">Roadmap of $MEDIA</h2>
    {roadmapData.map((item, index) => (
        <>
        <Row data-aos="fade-up" key={index} className="container mx-auto  align-items-center my-4">
        <Col
            md={6}
            className={index % 2 === 0 ? 'order-md-1' : 'order-md-2'}
        >
            <div
            className="p-4 rounded border-0"
            >
            <h3 className="fw-bold title display-6 d-md-none">{item.quarter}</h3>
            <p className='lead'>{item.text}</p>
            </div>
        </Col>
        <Col
            md={6}
            className={`d-none d-md-block text-center ${
            index % 2 === 0 ? 'order-md-2' : 'order-md-1'
            }`}
        >
            <h1
            className="display-1 qs fw-bold text-primary"
            style={{ minHeight: '100%' }}
            >
            {item.quarter.split(' ')[0]+"."+item.quarter.split(' ')[1]}
            </h1>
        </Col>
        </Row>
        </>
    ))}
    </div>
);
};

export default Roadmap;
