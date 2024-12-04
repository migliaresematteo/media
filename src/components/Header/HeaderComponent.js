import React, { useEffect, useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';

function HeaderComponent({ content }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cryptoData, setCryptoData] = useState({
        price: 0,
        marketCap: '0',
        volume24h: '0'
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Fetch DexScreener data
    useEffect(() => {
        const fetchDexData = async () => {
            try {
                const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/5e4pdnmb1wqwkzzvr3o3fvhwnbscffaivexq3capygkq');
                const data = await response.json();
                
                if (data.pairs && data.pairs[0]) {
                    const pair = data.pairs[0];
                    setCryptoData({
                        price: parseFloat(pair.priceUsd || 0),
                        marketCap: pair.fdv ? `$${formatNumber(pair.fdv)}` : 'N/A',
                        volume24h: pair.volume ? {
                            h24: `$${formatNumber(pair.volume.h24)}`,
                            change: pair.volume.h24ChangePercentage
                        } : { h24: 'N/A', change: 0 }
                    });
                }
            } catch (error) {
                console.error('Error fetching DexScreener data:', error);
            }
        };

        // Initial fetch
        fetchDexData();

        // Set up polling every 30 seconds
        const interval = setInterval(fetchDexData, 30000);

        return () => clearInterval(interval);
    }, []);

    // Helper function to format large numbers
    const formatNumber = (num) => {
        if (num >= 1e9) {
            return (num / 1e9).toFixed(2) + 'B';
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(2) + 'M';
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(2) + 'K';
        }
        return num.toFixed(2);
    };

    return (
        <div 
            className="pageHeader relative overflow-hidden"
            style={{
                backgroundImage: `
                    linear-gradient(
                    0deg, 
                    transparent 24%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.05 - (mousePosition.y / window.innerHeight) * 0.1)}) 25%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - (mousePosition.y / window.innerHeight) * 0.1)}) 26%, 
                    transparent 27%, 
                    transparent 74%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 0.1)}) 75%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 0.1)}) 76%, 
                    transparent 77%, 
                    transparent
                    ),
                    linear-gradient(
                    90deg, 
                    transparent 24%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - (mousePosition.x / window.innerWidth) * 0.1)}) 25%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - (mousePosition.x / window.innerWidth) * 0.1)}) 26%, 
                    transparent 27%, 
                    transparent 74%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 0.1)}) 75%, 
                    rgba(255, 255, 255, ${Math.max(0, 0.1 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 0.1)}) 76%, 
                    transparent 77%, 
                    transparent
                    )
                `,
                backgroundSize: '50px 50px, 50px 50px',
                minHeight: '100vh',
                margin: 0
            }}
        >
            <main>
                <header className="pageHeader d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
                    <Container>
                        {content.map((item) => (
                            <h1 data-aos="fade-up" key={item.title} className='text-light display-1 fw-bold title'>{item.title}</h1>
                        ))}
                        {content.map((item) => (
                            <p data-aos="fade-up" data-aos-delay="200" key={item.subtitle} className='text-light lead opacity-50 mb-4 title'>{item.subtitle}</p>
                        ))}
                        {content.map((item) => (
                            <a 
                                data-aos="fade-up" 
                                data-aos-delay="400" 
                                key={item.anchor} 
                                href={item.href} 
                                target='_blank'
                                rel="noreferrer"
                                className='d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none'
                            >
                                {item.anchor}
                            </a>
                        ))}

                        <div className="crypto-stats position-absolute bottom-0 start-0 mb-4 ms-4">
                            <div className="d-flex gap-4 flex-wrap">
                                <div className="stat-item animate-fade-in">
                                    <h3 className="text-light mb-1 animate-number fs-5">
                                        ${cryptoData.price ? cryptoData.price.toFixed(8) : '0.00000000'}
                                    </h3>
                                    <p className="text-light opacity-50 m-0 small">Current Price</p>
                                </div>
                                <div className="stat-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                    <h3 className="text-light mb-1 animate-number fs-5">{cryptoData.marketCap}</h3>
                                    <p className="text-light opacity-50 m-0 small">Market Cap</p>
                                </div>
                                <div className="stat-item animate-fade-in" style={{ animationDelay: '0.4s' }}>
                                    <h3 className="text-light mb-1 animate-number fs-5">{cryptoData.volume24h.h24}</h3>
                                    <p className="text-light opacity-50 m-0 small">24h Volume</p>
                                    {cryptoData.volume24h.change && (
                                        <span className={`badge ${cryptoData.volume24h.change >= 0 ? 'bg-success' : 'bg-danger'} mt-1`}>
                                            {cryptoData.volume24h.change >= 0 ? '+' : ''}{cryptoData.volume24h.change.toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="scroll-indicator position-absolute bottom-0 end-0 mb-4 me-4 d-none d-lg-block">
                            <div className="mouse">
                                <div className="scroll-wheel"></div>
                            </div>
                        </div>

                        <style>
                            {`
                                .animate-fade-in {
                                    opacity: 0;
                                    animation: fadeIn 0.5s ease-out forwards;
                                }

                                @keyframes fadeIn {
                                    from { opacity: 0; transform: translateY(20px); }
                                    to { opacity: 1; transform: translateY(0); }
                                }

                                .animate-number {
                                    transition: all 0.3s ease;
                                }

                                .mouse {
                                    width: 24px;
                                    height: 40px;
                                    border: 2px solid #fff;
                                    border-radius: 20px;
                                    position: relative;
                                }

                                .scroll-wheel {
                                    width: 3px;
                                    height: 6px;
                                    background-color: #fff;
                                    position: absolute;
                                    left: 50%;
                                    top: 6px;
                                    transform: translateX(-50%);
                                    border-radius: 2px;
                                    animation: scroll 1.5s ease-in-out infinite;
                                }

                                @keyframes scroll {
                                    0% { transform: translate(-50%, 0); opacity: 1; }
                                    50% { transform: translate(-50%, 15px); opacity: 0; }
                                    100% { transform: translate(-50%, 0); opacity: 1; }
                                }

                                @media (max-width: 768px) {
                                    .crypto-stats {
                                        font-size: 0.875rem;
                                    }
                                    .stat-item {
                                        min-width: 140px;
                                    }
                                }
                            `}
                        </style>
                    </Container>
                </header>
            </main>
        </div>
    );
}

export default HeaderComponent;