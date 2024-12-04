import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTrophy, faRoad, faCoins, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const NAVIGATION_LINKS = [
  { id: 1, title: 'Home', href: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
  { id: 2, title: 'Mission', href: '#mission', icon: <FontAwesomeIcon icon={faTrophy} /> },
  { id: 3, title: 'How to buy', href: '#buy', icon: <FontAwesomeIcon icon={faShoppingBag} /> },
  { id: 4, title: 'Roadmap', href: '#roadmap', icon: <FontAwesomeIcon icon={faRoad} /> },
  { id: 5, title: 'Tokenomics', href: '#tokenomics', icon: <FontAwesomeIcon icon={faCoins} /> },
  { id: 6, title: 'About us', href: '#footer', icon: <FontAwesomeIcon icon={faXTwitter} /> },
];
