import React from 'react';
import Banner from './Banner/Banner';
import Navber from './Navber/Navber';

const Home = () => {
    return (
        <div className='md:mr-32 md:ml-32'>
            <Navber></Navber>
            <Banner></Banner>
           
        </div>
    );
};

export default Home;