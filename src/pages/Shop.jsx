import React from 'react';
import Announcement from '../components/Announcement';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/products/Products';

const Shop = () => {
    return (
        <div className=''>
            <Navbar />
            <Announcement />
            <Filters />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Shop;