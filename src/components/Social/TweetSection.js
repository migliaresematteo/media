import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRetweet, faHeart, faReply, faUpload } from '@fortawesome/free-solid-svg-icons';

function TweetsSection({ tweets }) {
    return (
        <section className="py-5 bg-main blur text-light">
            <Container>
                <h2 className="title mb-4 text-center">
                    <FontAwesomeIcon icon={faXTwitter} className="me-3" />
                    Elon Musk about $media
                </h2>
                <div className="row g-4">
                    {tweets.map((tweet, index) => (
                        <div key={index} className="col-md-4 col-lg-4 d-flex">
                            <div className="tweet-card bg-light p-3 rounded d-flex flex-column justify-content-between w-100">
                                <div>
                                    <div className="tweet-header d-flex align-items-center mb-3">
                                        <img 
                                            src={tweet.profileImage || '/default-profile.png'} 
                                            alt={`${tweet.username}'s profile`} 
                                            className="rounded-circle me-3" 
                                            style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                        />
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <span className="fw-bold me-2 text-dark">{tweet.name}</span>
                                                <span className="text-muted small text-dark">@{tweet.username}</span>
                                            </div>
                                            <span className="text-muted small text-dark">{tweet.date}</span>
                                        </div>
                                        <FontAwesomeIcon icon={faXTwitter} className="ms-auto text-light opacity-75" />
                                    </div>
                                    <p className="mb-2 text-dark">{tweet.text}</p>
                                </div>
                                

                                <div>
                                    <div className="tweet-content mb-3 flex-grow-1">
                                        
                                        {tweet.media && (
                                            <div className="tweet-media mb-3">
                                                <img 
                                                    src={tweet.media} 
                                                    alt="Tweet media" 
                                                    className="img-fluid rounded" 
                                                    style={{maxHeight: '200px', objectFit: 'cover', width: '100%'}}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="tweet-interactions d-flex justify-content-start text-muted mt-auto">
                                        <div className="d-flex align-items-center text-dark">
                                            <FontAwesomeIcon icon={faReply} className="me-4" />
                                        </div>
                                        <div className="d-flex align-items-center text-dark">
                                            <FontAwesomeIcon icon={faRetweet} className="me-4" />
                                        </div>
                                        <div className="d-flex align-items-center text-dark">
                                            <FontAwesomeIcon icon={faHeart} className="me-4" />
                                        </div>
                                        <div>
                                            <FontAwesomeIcon className='text-dark' icon={faUpload} />
                                        </div>
                                    </div>
                                    
                                    <a 
                                        href={tweet.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="stretched-link"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default TweetsSection;