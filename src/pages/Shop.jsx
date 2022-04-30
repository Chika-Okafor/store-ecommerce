import React from 'react';
import Announcement from '../components/Announcement';
import BreadCrumbs from '../components/BreadCrumbs';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import ShopItems from '../components/shop/ShopItems';

const Shop = () => {
    return (
        <div className=''>
            <Navbar />
            <Announcement />
            <BreadCrumbs pageCrumbs='Home - Shop' />
            <ShopItems />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Shop;
