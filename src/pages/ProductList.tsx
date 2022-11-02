import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter';
import ProductList from '../components/ProductList/ProductList';
import Products from '../components/Products/Products';

const ProductListPage = () => {
    return (
        <div className='list-container'>
            <Navbar />
            <Announcement />
            <ProductList />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductListPage;