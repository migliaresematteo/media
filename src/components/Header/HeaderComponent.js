import React, { useEffect, useState, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';

function HeaderComponent({ content }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cryptoData, setCryptoData] = useState({
        price: 0,
        marketCap: '0',
        volume24h: '0',
        priceChange24h: 0
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const fetchDexData = useCallback(async () => {
        try {
            setError(null);
            const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/5e4pdnmb1wqwkzzvr3o3fvhwnbscffaivexq3capygkq');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            if (data.pairs && data.pairs[0]) {
                const pair = data.pairs[0];
                const priceChangePercentage = pair.priceChange?.h24 || 0;
                
                setCryptoData({
                    price: parseFloat(pair.priceUsd || 0),
                    marketCap: pair.fdv ? `$${formatNumber(pair.fdv)}` : 'N/A',
                    volume24h: pair.volume ? {
                        h24: `$${formatNumber(pair.volume.h24)}`,
                        change: pair.volume.h24ChangePercentage
                    } : { h24: 'N/A', change: 0 },
                    priceChange24h: parseFloat(priceChangePercentage)
                });
                setLastUpdate(new Date());
            } else {
                throw new Error('Invalid data structure received');
            }
        } catch (error) {
            console.error('Error fetching DexScreener data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDexData();
        const interval = setInterval(fetchDexData, 30000);
        return () => clearInterval(interval);
    }, [fetchDexData]);

    const handleSlideScroll = (event) => {
        const slider = event.target;
        const slideWidth = slider.clientWidth;
        const scrollPosition = slider.scrollLeft;
        const currentSlide = Math.round(scrollPosition / slideWidth);
        setActiveSlide(currentSlide);
    };

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
            id='header'
            className="pageHeader relative overflow-hidden"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--cursor-x', `${x}px`);
                e.currentTarget.style.setProperty('--cursor-y', `${y}px`);
            }}
            style={{
                minHeight: '100vh',
                margin: 0
            }}
        >
            <main>
                <header className="pageHeader d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
                    <Container>
                        {content.map((item) => (
                            <h1 key={item.title} className='text-light display-1 fw-bold title animate-slide-in'>{item.title}</h1>
                        ))}
                        {content.map((item) => (
                            <p key={item.subtitle} className='text-light lead opacity-50 mb-4 title animate-slide-in' style={{ animationDelay: '0.2s' }}>{item.subtitle}</p>
                        ))}
                        {content.map((item) => (
                            <a 
                                key={item.anchor} 
                                href={item.href} 
                                target='_blank'
                                rel="noreferrer"
                                className='d-block text-light py-2 px-4 border border-1 border-light w-max text-decoration-none animate-slide-in'
                                style={{ animationDelay: '0.4s' }}
                            >
                                {item.anchor}
                            </a>
                        ))}

                        <div className="crypto-stats position-absolute bottom-0 start-0 mb-4 ms-md-4">
                            {error && (
                                <Alert variant="danger" className="mb-3 animate-slide-in">
                                    Error loading data: {error}
                                </Alert>
                            )}
                            <div className="d-none d-md-flex gap-4 flex-wrap">
                                <div className={`stat-item ${loading ? 'loading' : ''}`}>
                                    <h3 className="text-light mb-1 animate-number">
                                        ${cryptoData.price ? cryptoData.price.toFixed(8) : '0.00000000'}
                                        <span 
                                            className={`badge ms-2 ${cryptoData.priceChange24h >= 0 ? 'bg-success' : 'bg-danger'}`}
                                        >
                                            {cryptoData.priceChange24h >= 0 ? '+' : ''}{cryptoData.priceChange24h.toFixed(2)}%
                                        </span>
                                    </h3>
                                    <p className="text-light opacity-50 mb-2 mb-md-0 m-0 small">Current Price (24h)</p>
                                </div>
                                <div className={`stat-item ${loading ? 'loading' : ''}`}>
                                    <h3 className="text-light mb-1 animate-number">{cryptoData.marketCap}</h3>
                                    <p className="text-light opacity-50 mb-2 mb-md-0 m-0 small">Market Cap</p>
                                </div>
                                <div className={`stat-item ${loading ? 'loading' : ''}`}>
                                    <h3 className="text-light mb-1 animate-number">{cryptoData.volume24h.h24}</h3>
                                    <p className="text-light opacity-50 mb-2 mb-md-0 m-0 small">24h Volume</p>
                                    {cryptoData.volume24h.change && (
                                        <span className={`badge ${cryptoData.volume24h.change >= 0 ? 'bg-success' : 'bg-danger'} mt-1`}>
                                            {cryptoData.volume24h.change >= 0 ? '+' : ''}{cryptoData.volume24h.change.toFixed(2)}%
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Mobile Stats */}
                            <div className="container d-md-none">
                                <div className="mb-4">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="text-light fs-4">${cryptoData.price ? cryptoData.price.toFixed(8) : '0.00000000'}</span>
                                        <span className={`small ${cryptoData.priceChange24h >= 0 ? 'text-success' : 'text-danger'}`}>
                                            {cryptoData.priceChange24h >= 0 ? '+' : ''}{cryptoData.priceChange24h.toFixed(2)}%
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <span className="text-light opacity-75 small d-block mb-1">Market Cap</span>
                                    <span className="text-light">{cryptoData.marketCap}</span>
                                </div>
                                
                                <div className="mb-4">
                                    <span className="text-light opacity-75 small d-block mb-1">24h Volume</span>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="text-light">{cryptoData.volume24h.h24}</span>
                                        {cryptoData.volume24h.change && (
                                            <span className={`small ${cryptoData.volume24h.change >= 0 ? 'text-success' : 'text-danger'}`}>
                                                {cryptoData.volume24h.change >= 0 ? '+' : ''}{cryptoData.volume24h.change.toFixed(2)}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scroll-indicator position-absolute bottom-0 end-0 me-4 d-none d-lg-flex flex-column justify-content-center align-items-center">
                            <div className="mouse">
                                <div className="scroll-wheel"></div>
                            </div>
                            <p className="text-light opacity-50 text-center mt-2 small">Scroll Down</p>
                        </div>
                    </Container>
                </header>
            </main>
        </div>
    );
}

export default HeaderComponent;