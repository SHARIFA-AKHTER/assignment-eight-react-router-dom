import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gatgets/Gadgets';
import Explore from '../Explore/Explore';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Gadgets></Gadgets>

            <Explore></Explore>
        </div>
    );
};

export default Home;