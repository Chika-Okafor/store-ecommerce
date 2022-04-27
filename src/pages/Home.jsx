import React from 'react';
import Announcement from '../components/Announcement';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Hero />
        </div>
    );
}

export default Home;
