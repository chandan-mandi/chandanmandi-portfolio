import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import MenuBar from '../components/MenuBar/MenuBar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import TopBanner from '../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div className="home-page">
            <MenuBar/>
            <TopBanner/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;