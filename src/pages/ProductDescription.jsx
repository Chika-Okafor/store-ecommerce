import React from 'react';
import Announcement from '../components/Announcement';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/Footer';
import ItemDescription from '../components/ItemDescription';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const ProductDescription = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <BreadCrumbs pageCrumbs='Home - Shop - Product Description' />
            <ItemDescription />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductDescription;
