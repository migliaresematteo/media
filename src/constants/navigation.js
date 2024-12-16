import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faRoute, faChartPie, faVideo, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const NAVIGATION_LINKS = [
    {
        id: 'home',
        title: 'Home',
        href: '/',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        id: 'mission',
        title: 'Mission',
        href: '#mission',
        icon: <FontAwesomeIcon icon={faRocket} />
    },
    {
        id: 'buy',
        title: 'How to Buy',
        href: '#buy',
        icon: <FontAwesomeIcon icon={faRoute} />
    },
    {
        id: 'wiki',
        title: 'Learn',
        href: '#wiki',
        icon: <FontAwesomeIcon icon={faGraduationCap} />
    },
    {
        id: 'tokenomics',
        title: 'Tokenomics',
        href: '#tokenomics',
        icon: <FontAwesomeIcon icon={faChartPie} />
    },
    {
        id: 'video',
        title: 'Video',
        href: '#video',
        icon: <FontAwesomeIcon icon={faVideo} />
    }
];
