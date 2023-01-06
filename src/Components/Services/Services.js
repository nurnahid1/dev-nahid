import React from 'react';

import { FaBug, FaFigma, FaLaptop, FaLaptopCode, FaReact } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import './Services.css'

// animation 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Services = () => {
    return (
    <div className=''>
           <div className='relative w-full mb-16 md:mb-20'>
           <h2 className='text-3xl md:text-5xl text-white mb-12 text-center font-roboto text-gradient '>Services I provide</h2>
           {/* Line */}
            <div className='h-[2px] w-56 md:w-60 lg:w-96  bg-gradient-to-r from-[#000814] to-[#fff]    md:px-5 lg:px-10 rounded-full  absolute left-20 md:left-[470px]  top-10  md:top-[50px] '>
            </div>
            </div>
            {/* Service Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 md:gap-2 lg:gap-4 pb-5 mt-5 max-w-xs md:max-w-[1024px] mx-auto'>

            {/* card */}
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <FaFigma className='icon w-10 h-10 mx-auto '></FaFigma>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto'>Figma to HTML5</h2>
                    <p className=' text-white mb-3 font-roboto text-md'>I will convert your Figma file into HTML5 with the latest Bootstrap or Tailwind CSS. It will be fully responsive and pixel-perfect with clean and effective code. Let's turn your design into your website</p>
                </div>
            </div>
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <FaReact className='icon w-10 h-10 mx-auto'></FaReact>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto'>Figma to React</h2>
                    <p className=' text-white mb-3 font-roboto'>Convert your Figma design into React website with the latest Bootstrap or Tailwind. It will be mobile responsive and pixel-perfect design. If you have any design I will turn It into a website.</p>
                </div>
            </div>
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <FaLaptop className='icon w-10 h-10 mx-auto'></FaLaptop>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto '>Front-end Development</h2>
                    <p className=' text-white mb-3 font-roboto'>I am a passionate Front-End Developer who is 100% focused on building creative and unique user-friendly UI with error-free code and 100% client satisfaction.</p>
                </div>
            </div>
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <FaLaptopCode className='icon w-10 h-10 mx-auto'></FaLaptopCode>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto'>MERN Stack Development</h2>
                    <p className=' text-white mb-3 font-roboto'>MERN is a popular stack for building full-stack websites. Currently, I am only focused on Front-end development and working on User interface design and development.</p>
                </div>
            </div>
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <DiResponsive className='icon w-14 h-14 mx-auto'></DiResponsive>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto pb-4'>Responsive Design</h2>
                    <p className=' text-white mb-3 font-roboto'>I make websites that support pc, tablet, and mobile screens which are fully responsive means the user can use the website from pc or mobile very easily.</p>
                </div>
            </div>
            <div class="card px-2 py-2 w-65">
            <div class="layer"></div>
                <div className='content'>
                    <FaBug className='icon w-10 h-10 mx-auto'></FaBug>
                    <h2 className=' text-2xl md:text-3xl font-bold my-3 font-roboto'>Website bug Fixing</h2>
                    <p className=' text-white mb-3 font-roboto'>Website problems & bugs are common problems for almost every website. With bugs a website lost a good user experience, I will fix the bugs, and will ensure you a bug-free clean, and well-optimized website.</p>
                </div>
            </div>
        
       
        
        </div>     
    </div>




    );
};

export default Services;