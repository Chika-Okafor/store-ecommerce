import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <BreadCrumbs pageCrumbs='Home' />
            <Hero />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
