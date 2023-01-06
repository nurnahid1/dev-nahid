import React from 'react';
import './About.css'
import img from '../../Images/aboutme.jpg'
import { Link } from 'react-router-dom';
import {  FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp, } from 'react-icons/fa';

const About = () => {
    return (
        <div className='md:mr-20 md:ml-20 mt-16 md:mt-28'>
            <div className='about md:h-auto h-full py-5 mt-6 mb-16 md:mb-20 md:flex md:justify-between mx-10 md:px-12 lg:px-24 px-8 md:gap-16 lg:gap-32'>
            <div>
                <img className='md:max-w-xs lg:max-w-sm  max-w-96 rounded-lg ' src={img} alt="" />
            </div>
            <div className='text-center md:text-start'>
                <h2 className='text-white  mt-10 text-2xl md:text-4xl lg:text-5xl font-poppins text-gradient '>Nur Alam Nahid</h2>
                <div className='flex gap-3 justify-center md:justify-start'>
                    <button> <a href="https://github.com/nahid770"><FaGithub className='text-white w-6 h-6  my-3'></FaGithub></a></button>
                    <button> <a href="https://www.facebook.com/nurnahid939/"><FaFacebook className='text-white w-6 h-6  my-3'></FaFacebook> </a></button>
                    <button> <a href="https://www.linkedin.com/in/devnahid1/"><FaLinkedinIn className='text-white w-6 h-6  my-3'></FaLinkedinIn></a> </button>
                    <button> <a href="https://wa.me/01885688950"><FaWhatsapp className='text-white w-6 h-6  my-3'></FaWhatsapp></a> </button>
                  
                </div>
                <p className='text-white font-sans-serif'>Hey, this is Nahid from Bangladesh, a passionate web developer who loves to take new challenges and build unique features. I always try to learn new technologies and keep me up to date. I know HTML5, CSS, Bootstrap, Tailwind CSS, Javascript (ES6), React 18 and the basic Node JS with Express JS and MongoDB (Database). My dream is to become a NEXT Level Full-stack Developer. 
                </p>
                <div className='flex  pt-4 items-center justify-center md:justify-start'>
                <button className='text-white flex items-center  rounded-sm bg-[#3a0ca3] p-2 font-poppins'> <a href="https://github.com/nahid770" >Github</a> <FaGithub className='ml-2 '></FaGithub></button>
                <Link to="/contact" className='text-white ml-5 bg-[#3f37c9] hover:bg-[#3a0ca3] rounded-sm	 px-3 py-2 font-poppins'>Contact</Link>
                </div>
               </div>
            </div>
        </div>
    );
};

export default About;