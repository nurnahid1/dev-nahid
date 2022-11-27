import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div >
            
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Blog></Blog>
            <Contact></Contact>
         
           
        </div>
    );
};

export default Home;