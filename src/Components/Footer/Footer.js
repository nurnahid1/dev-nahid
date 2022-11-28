import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div  className='bg-slate-900 mt-16 pb-3 pt-6 md:pt-12'> 
            <div className='md:flex justify-around items-center'>
            <div>
                <h2 className='logo text-xl lg:text-3xl text-center font-poppins mr-3 mb-3'>Nur Alam Nahid</h2>
            </div>
            <div className='flex justify-center py-2'>
            <a className='pr-4 ' href="https://github.com/nahid770?tab=repositories"><FaGithub className='w-6 h-6 text-white'></FaGithub></a>
            <a className='pr-4' href="https://www.facebook.com/nurnahid939/"><FaFacebook className='w-6 h-6 text-white'></FaFacebook></a>
            <a className='pr-4' href="https://twitter.com/devnahid1"><FaTwitter className='w-6 h-6 text-white'></FaTwitter></a>
            <a className='pr-4' href="https://www.linkedin.com/in/devnahid1/"><FaLinkedin className='w-6 h-6 text-white'></FaLinkedin></a>
            <a className='pr-4' href="https://wa.me/01885688950"><RiWhatsappFill className='w-6 h-6 text-white'></RiWhatsappFill></a>
            </div>
            <div className='text-center'>
                <Link className='mr-4 font-sans-serif  text-white' to="/">Home</Link>
                <Link className='mr-4 font-sans-serif  text-white' to="/about">About</Link>
                <Link className='mr-4 font-sans-serif  text-white' to="/contact">Contact</Link>
            </div>
            </div>
            <p className='text-white text-center mt-3  md:mt-6 text-poppins mb-14 md:mb-0'>Copyright 2022 <span className='text-[#02BEDB] font-poppins'>Dev Nahid</span> All Right Reserved</p>
        </div>
    );
};

export default Footer;