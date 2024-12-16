import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import LessonTemplate from './pages/LessonTemplate';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import './App.css';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar expand="lg" className="blur border-bottom border-1 border-light py-3 fixed-top w-100 transition-all" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" className="text-light d-flex justify-content-center align-items-center">
            <span><b>$media</b><span className="opacity-50"> on Solana</span></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="text-light nav-link-hover">
                <FontAwesomeIcon icon={faHome} className="me-2" />
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/wiki" className="text-light nav-link-hover">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  Learn
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/:lessonId" element={<LessonTemplate />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;