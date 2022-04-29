import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Itemdescription from '../components/ItemDescription';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Shopitem = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Itemdescription />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Shopitem;
