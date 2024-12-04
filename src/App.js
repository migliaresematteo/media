import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Layout Components
import Layout from './layouts/MainLayout';

// Components
import HeaderComponent from './components/Header/HeaderComponent';
import NavbarComponent from './components/Navigation/NavbarComponent';
import TweetSection from './components/Social/TweetSection';
import VideoSection from './components/Video/VideoSection';
import MediaMissionComponent from './components/Mission/MediaMissionComponent';
import Roadmap from './components/Roadmap/Roadmap';
import MediaTokenomics from './components/Tokenomics/Tokenomics';
import MediaTokenBuySection from './components/Buy/Buy';
import Footer from './components/Footer/Footer';

// Constants and Data
import { NAVIGATION_LINKS } from './constants/navigation';
import { MOCK_TWEETS } from './data/mockData';
import { HEADER_CONTENT } from './constants/content';

// Assets
import vid from './assets/vid.mp4';
import elonPic from './assets/kPL61o0F_400x400.jpg'
import tweetIMG1 from './assets/GSifwV9bQAAeEaG.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrophy, faRoad, faCoins, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <NavbarComponent 
        navLinks={NAVIGATION_LINKS}        
      />
      <HeaderComponent 
        content={HEADER_CONTENT}        
      />
      <MediaMissionComponent />
      <MediaTokenBuySection />
      <Roadmap />
      <MediaTokenomics />
      <VideoSection videoSrc={vid} />
      <TweetSection tweets={MOCK_TWEETS} />
      <Footer />
    </Layout>
  );
}

export default App;