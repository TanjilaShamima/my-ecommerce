import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    );
};

export default Home;