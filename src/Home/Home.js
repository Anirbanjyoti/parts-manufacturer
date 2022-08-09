import React from 'react';
import Business from './Business';
import Carousel from './Carousel';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Tools></Tools>
            <Business></Business>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;