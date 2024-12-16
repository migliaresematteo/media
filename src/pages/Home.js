import React from 'react';
import HeaderComponent from '../components/Header/HeaderComponent';
import MediaMissionComponent from '../components/Mission/MediaMissionComponent';
import Roadmap from '../components/Roadmap/Roadmap';
import MediaTokenomics from '../components/Tokenomics/Tokenomics';
import MediaTokenBuySection from '../components/Buy/Buy';
import VideoSection from '../components/Video/VideoSection';
import TweetsSection from '../components/Social/TweetSection';
import { HEADER_CONTENT } from '../constants/content';
import vid from '../assets/vid.mp4';

const tweets = [
    {
        profileImage: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
        name: "Elon Musk",
        username: "elonmusk",
        date: "Dec 1",
        text: "The media is the message"
    },
    {
        profileImage: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
        name: "Elon Musk",
        username: "elonmusk",
        date: "Dec 2",
        text: "Mainstream media is a weapon of mass deception"
    },
    {
        profileImage: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
        name: "Elon Musk",
        username: "elonmusk",
        date: "Dec 3",
        text: "Citizen journalism is the future"
    }
];

function Home() {
    return (
        <>
            <HeaderComponent 
                content={HEADER_CONTENT}
            />
            <MediaMissionComponent />
            <MediaTokenBuySection />
            <Roadmap />
            <MediaTokenomics />
            <VideoSection videoSrc={vid} />
            <TweetsSection tweets={tweets} />
        </>
    );
}

export default Home;
