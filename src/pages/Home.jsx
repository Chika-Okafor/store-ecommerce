import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Hero />
            <Categories />
        </div>
    );
}

export default Home;
