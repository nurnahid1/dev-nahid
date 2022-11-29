import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from "react-icons/hi";
import banner from '../../../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-5 md:mx-10 lg:mx-24 mb-10'>
            <div className='lg:max-w-full md:flex justify-between items-center '>
            <div className='mx-auto pl-3 mt-6 ml-5 '>
                <img className='lg:max-w-lg ' src={banner} alt="banner img" />
                <div className='h-[4px]  md:w-[400px] md:left-40 mx-auto w-3/4 absolute left-12 rounded-full bg-gradient-to-r from-slate-100 to-slate-500 shadow-2xl'></div>
            </div>
            <div className='pt-5 '>
                <h1 className='text-slate-100 text-5xl text-center md:text-start font-roboto'>Hey,👋</h1>
                <h1 className='text-3xl mt-5 text-center md:text-start text-slate-400 text-gradient font-roboto'>It's me Nahid </h1>
                <p className='text-slate-500 absoulate bottom-9 text-center md:text-start font-open-Sans'>I'm a</p>
                <h2 className='text-4xl md:text-3xl lg:text-6xl mt-3 text-center md:text-start text-slate-400 text-gradient  font-roboto'>Front-End Developer</h2>
                <p className='text-slate-300 mt-1 text-center md:text-start font-sans-serif'>I build web applications using <span className='text-[#61DAFB] font-bold'>React</span> </p>
                <p className='text-slate-200 mt-5 text-center md:text-start font-sans-serif'>I am a passionate web developer love to code and take challenges. It's been two years I've been working as a developer. Currently learning Backend technologies and focused on <span>Full Stack Development</span>.</p>

                <div className='mt-10  w-full flex justify-center md:justify-start mx-auto'>
                    <a href="https://github.com/nahid770?tab=repositories" className='text-white flex items-center border border-slate-300 hover:border-blue-700 px-10 py-3 mr-5 font-poppins'>Github<FaGithub className='ml-2 '> </FaGithub> </a>
                    <button className='text-white flex items-center border border-blue-700 px-12 py-3  font-poppins '>Resume <HiDownload className='ml-2'></HiDownload> </button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;