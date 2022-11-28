import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div >
            
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Blog></Blog>
            <Contact></Contact>
         
           
        </div>
    );
};

export default Home;