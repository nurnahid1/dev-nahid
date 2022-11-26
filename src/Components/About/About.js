import React from 'react';
import Navber from '../Home/Navber/Navber';
import './About.css'
import img from '../../Images/aboutme.jpg'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp, } from 'react-icons/fa';

const About = () => {
    return (
        <div className='md:mr-20 md:ml-20'>
            <Navber></Navber>
            <div className='about md:h-auto h-full py-5 mt-6 mb-12 md:flex md:justify-between mx-10 md:px-12 lg:px-24 px-8 md:gap-16 lg:gap-32'>
            <div>
                <img className='md:max-w-xs lg:max-w-sm  max-w-96 rounded-lg ' src={img} alt="" />
            </div>
            <div className=''>
                <h2 className='text-white mt-10 text-2xl md:text-4xl lg:text-5xl'>Nur Alam Nahid</h2>
                <div className='flex mr-3'>
                    <Link> <FaGithub className='text-white w-6 h-6 mr-3 my-3'></FaGithub></Link>
                    <Link> <FaEnvelope className='text-white w-6 h-6 mr-3 my-3'></FaEnvelope> </Link>
                    <Link> <FaLinkedinIn className='text-white w-6 h-6 mr-3 my-3'></FaLinkedinIn> </Link>
                    <Link> <FaWhatsapp className='text-white w-6 h-6 mr-3 my-3'></FaWhatsapp> </Link>
                  
                </div>
                <p className='text-white'>Hey, this is Nahid from Bangladesh, a passionate web developer who loves to take new challenges and build unique features. I always try to learn new technologies and keep me up to date. I know HTML5, CSS3, Bootstrap, Tailwind CSS, Javascript (ES6), React 18. I know the basic Node JS with Express JS and MongoDB (Database). My dream is to become a NEXT Level Full-stack Developer. 
                </p>
                <div className='flex  pt-4 items-center'>
                <Link className='text-white flex items-center border p-2'>Github <FaGithub className='ml-2 '></FaGithub></Link>
                <Link className='text-white ml-5 border px-3 py-2'>Contact</Link>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default About;