import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faShieldHalved, faRocket, faBullhorn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import HeaderComponent from '../Header/HeaderComponent';
import './Landing.scss';

const Landing = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    socialProfile1: '',
    socialProfile2: '',
    vision: '',
  });
  const [signupProgress, setSignupProgress] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);
  const TYPEFORM_TOKEN = process.env.REACT_APP_TYPEFORM_TOKEN;
  const FORM_ID = process.env.REACT_APP_TYPEFORM_FORM_ID;
  const TARGET_SUBMISSIONS = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchDexData = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/5e4pdnmb1wqwkzzvr3o3fvhwnbscffaivexq3capygkq');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.pairs && data.pairs[0]) {
          setCryptoData(data.pairs[0]);
        } else {
          throw new Error('Invalid data structure received');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDexData();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchSubmissionCount = async () => {
      try {
        const response = await fetch(
          `https://api.typeform.com/forms/${FORM_ID}/responses`,
          {
            headers: {
              'Authorization': `Bearer ${TYPEFORM_TOKEN}`
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch submission count');
        }

        const data = await response.json();
        const total = data.total_items;
        setSubmissionCount(total);
        
        // Calculate progress based on total submissions
        const progress = Math.min(Math.round((total / TARGET_SUBMISSIONS) * 100), 100);
        setSignupProgress(progress);
      } catch (error) {
        console.error('Error fetching submission count:', error);
      }
    };

    // Fetch initially
    fetchSubmissionCount();

    // Set up polling every 30 seconds
    const pollInterval = setInterval(fetchSubmissionCount, 30000);

    return () => clearInterval(pollInterval);
  }, [TYPEFORM_TOKEN, FORM_ID]);

  const headerContent = [{
    title: "$media - You Are The Media Now",
    subtitle: "Promote freedom of expression, support independent journalism, and challenge the control of legacy media to bring the truth to light, democratizing the narrative.",
    description: "$media empowers creators to challenge traditional media by earning tokens for content about $media. We're eager to collaborate with X personalities, YouTubers, video editors, bloggers, memers, crypto enthusiasts, and anyone interested in our project. We offer 20 million tokens for those who meet our criteria, with tokens sent directly to their Solana wallet upon reaching engagement goals. Join us to democratize information through coordinated marketing campaigns.",
    anchor: "Get Started",
    href: "#join-form"
  }];

  return (
    <div className="landing-page">
      <HeaderComponent content={headerContent} />
      <div className='border-top border-1 border-light'>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section className="intro-section text-center mb-5">
            <h2 className="mb-4">Welcome to the Future of News!</h2>
            <p className="lead mb-5">
              Join us in this movement of citizen journalism, where <strong>you</strong> become the architect of the narrative.
            </p>
          </section>

          <section className="features-section mb-5">
            <Row className="g-4">
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <FontAwesomeIcon icon={faUsers} className="feature-icon mb-3" />
                    <Card.Title>Empowerment</Card.Title>
                    <Card.Text>
                      Each token holder has a voice. You can influence and share news directly.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <FontAwesomeIcon icon={faChartLine} className="feature-icon mb-3" />
                    <Card.Title>Decentralization</Card.Title>
                    <Card.Text>
                      No more media moguls. The power is in the hands of the people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <FontAwesomeIcon icon={faShieldHalved} className="feature-icon mb-3" />
                    <Card.Title>Transparency</Card.Title>
                    <Card.Text>
                      Thanks to social media, users can verify information, debunking falsehoods without censorship.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section className="opportunity-section mb-5">
            <Card className="glassmorphism text-light">
              <Card.Body>
                <h2 className="mb-4">Your Opportunity</h2>
                <p className="lead mb-4">
                  Unlock your potential with $media - we're giving away 20 million tokens to creators. Earn tokens by promoting content from your profile or by joining our daily coordinated raids on our Telegram group.
                </p>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="process-card">
                      <FontAwesomeIcon icon={faRocket} className="process-icon mb-3" />
                      <h4 className='text-light'>Apply for Token</h4>
                      <p className='text-light'>Receive between 100k to 500k tokens.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="process-card">
                      <FontAwesomeIcon icon={faBullhorn} className="process-icon mb-3" />
                      <h4 className='text-light'>Promote Truth</h4>
                      <p>Use your platform to share authentic, unfiltered content. Mention and promote $media.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="process-card">
                      <FontAwesomeIcon icon={faHandshake} className="process-icon mb-3" />
                      <h4 className='text-light'>Community Support</h4>
                      <p>Let your followers support you by investing in $media.</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </section>

          <section className="revolution-section mb-5">
            <Card className="glassmorphism text-light">
              <Card.Body>
                <h2 className="mb-4">Join the $media revolution with three simple steps</h2>
                <Row className="g-4">
                  <Col md={4}>
                    <div className="revolution-card">
                      <h4 className='text-light'>Create & Share</h4>
                      <p>Produce content that resonates with our mission. Share it on your social platforms to engage your audience.</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="revolution-card">
                      <h4 className='text-light'>Earn & Grow</h4>
                      <ul>
                        <li>Share Content: Earn tokens by promoting $media from your profile or through our Telegram raids.</li>
                        <li>Meet Goals: Achieve the engagement targets set for each campaign to qualify for token rewards.</li>
                        <li>Verification & Distribution: All results will be analyzed and verified before tokens are distributed to your Solana wallet.</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="revolution-card">
                      <h4 className='text-light'>Impact Together</h4>
                      <ul>
                        <li>Collaborate: Work alongside other creators in our community to amplify the message of $media.</li>
                        <li>Promote: Use your unique skills to contribute to our collective marketing efforts.</li>
                        <li>Build Credibility: By promoting a project with significant growth potential, enhance your own credibility in the evolving landscape of media and cryptocurrency.</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </section>

          <section className="stats-section mb-5">
            <Card className="glassmorphism text-light">
              <Card.Body>
                <h2 className="mb-4">Current Status</h2>
                <Row className="g-4">
                  <Col md={4} className="d-flex">
                    <div className="stat-item w-100">
                      <h3>Total Supply</h3>
                      <p className="mb-0">1 Million Tokens</p>
                    </div>
                  </Col>
                  <Col md={4} className="d-flex">
                    <div className="stat-item w-100">
                      <h3>Holders</h3>
                      <p className="mb-0">{cryptoData?.holders || '550'}</p>
                    </div>
                  </Col>
                  <Col md={4} className="d-flex">
                    <div className="stat-item w-100">
                      <h3>Founder Holdings</h3>
                      <p className="mb-0">60 Million Tokens</p>
                      <small>(20M locked until June personal supply, 20M for marketing and campaigns)</small>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </section>

          <section id="join-form" className="join-section mb-5">
            <Card className="glassmorphism">
              <Card.Body className="text-light pt-4">
                <Card.Title className="text-center h3 mb-4">Join the Movement</Card.Title>
                <div className="progress-container mb-4">
                  <div className="progress-bar-wrapper">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${signupProgress}%` }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    {submissionCount}/{TARGET_SUBMISSIONS} Signups
                    {submissionCount >= TARGET_SUBMISSIONS && " - Goal Reached! 🎉"}
                  </div>
                </div>
                <div 
                  data-tf-live="01JERJB5Q3B9QW7YA5SHCRM2DA"
                  style={{ height: '500px' }} 
                  data-tf-on-submit={() => {
                    // Increment local count immediately for better UX
                    setSubmissionCount(prev => prev + 1);
                  }}
                ></div>
              </Card.Body>
            </Card>
          </section>
        </motion.div>
      </Container>
      </div>
    </div>
  );
};

export default Landing;
