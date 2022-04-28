import React from 'react';
import Announcement from '../components/Announcement';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/products/Products';

const Shop = () => {
    return (
        <div className=''>
            <Navbar />
            <Announcement />
            <Filter />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Shop;
