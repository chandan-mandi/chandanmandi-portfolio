import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import MenuBar from '../components/MenuBar/MenuBar';
import TopBanner from '../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div className="home-page">
            <MenuBar/>
            <TopBanner/>
            <AboutMe/>
        </div>
    );
};

export default Home;