import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Hero />
            <Categories />
            <Products />
        </div>
    );
}

export default Home;
