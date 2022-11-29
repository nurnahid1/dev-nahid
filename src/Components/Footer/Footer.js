import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiWhatsappFill } from "react-icons/ri";
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div  className='bg-slate-900 mt-16 pb-3 pt-6 md:pt-12'> 
            <div className='md:flex justify-around items-center'>
            <div>
            <h2 className='logo text-xl lg:text-3xl md:hidden text-center font-poppins  mb-3 '>Nur Alam Nahid</h2>
                <div className='flex justify-center md:justify-start items-center md:ml-10 '>
                <p><FiMail className='w-6 h-6 text-white'></FiMail></p>
                <h5 className='ml-2 text-white  md:text-xl text-center md:text-start'> Email</h5>
                </div>
                <p className='text-gradient text-center md:text-start md:ml-10'>nurnahid70@gmail</p>
                <div className='flex justify-center md:justify-start items-center mt-2 md:ml-10 '>
                <p><MdLocationOn className='w-6 h-6 text-white'></MdLocationOn></p>
                <h5 className='ml-1 text-white md:text-xl '> Address</h5>
                </div>
                <p className='text-gradient  md:w-full text-center md:text-start md:ml-10 '>South Damudya, Shariatpur, Dhaka Bangladesh</p>

                <div className='flex justify-center md:justify-start items-center mt-2 md:ml-10'>
                <p><MdLocationOn className='w-6 h-6 text-white'></MdLocationOn></p>
                <h5 className='ml-1 text-white md:text-xl '> Contact</h5>
                </div>
                <p className='text-gradient text-center md:text-start mb-3 md:mb-0 md:ml-10'>+8801925118101</p>

            </div>
            <div>
            <h2 className='logo text-xl lg:text-3xl hidden md:block text-center font-poppins  mb-3 '>Nur Alam Nahid</h2>

            <div className='flex justify-center py-1 mt-5'>
            <a className='pr-4 ' href="https://github.com/nahid770?tab=repositories"><FaGithub className='w-6 h-6 text-white'></FaGithub></a>
            <a className='pr-4' href="https://www.facebook.com/nurnahid939/"><FaFacebook className='w-6 h-6 text-white'></FaFacebook></a>
            <a className='pr-4' href="https://twitter.com/devnahid1"><FaTwitter className='w-6 h-6 text-white'></FaTwitter></a>
            <a className='pr-4' href="https://www.linkedin.com/in/devnahid1/"><FaLinkedin className='w-6 h-6 text-white'></FaLinkedin></a>
            <a className='pr-4' href="https://wa.me/01885688950"><RiWhatsappFill className='w-6 h-6 text-white'></RiWhatsappFill></a>
            </div>
            </div>
            <div className='text-center my-2 md:my-0 text-sm md:text-base'>
                <Link className='mr-4 font-sans-serif  text-white' to="/">Home</Link>
                <Link className='mr-4 font-sans-serif  text-white' to="/about">About</Link>
                <Link className='mr-4 font-sans-serif  text-white' to="/contact">Contact</Link>
            </div>
            </div>
            <p className='text-white text-center mt-3 text-sm md:text-base  md:mt-6 text-poppins mb-14 md:mb-0'>Copyright 2022 <span className='text-[#02BEDB] font-poppins'>Dev Nahid</span> All Right Reserved</p>
        </div>
    );
};

export default Footer;