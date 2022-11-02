import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const SingleProductPage = () => {
    return (
        <div className='single-container'>
            <Navbar />
            <Announcement />
            <ProductDetails />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default SingleProductPage;