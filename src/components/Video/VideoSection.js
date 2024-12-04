import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBagShopping, faTrophy, faSquare } from '@fortawesome/free-solid-svg-icons';
function VideoSection({ videoSrc }) {
    return (
        <section className="bg-main text-light">
            <Container>
                <h2 className="title mb-4 text-center display-6 fw-bold">
                    Joe Rogan's Breakdown
                </h2>
                <div className="row">
                    <div className="col-12">
                        <div className="video-container bg-adding p-3 rounded">
                            <video 
                                controls 
                                className="w-100 rounded" 
                                src={videoSrc}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default VideoSection;