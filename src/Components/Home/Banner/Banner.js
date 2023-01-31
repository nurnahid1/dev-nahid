import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from "react-icons/hi";
import banner from '../../../Images/banner.png'
import './Banner.css'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import hi from '../../../Images/hi.png'

const Banner = () => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };
    return (
        <div className='mx-5 md:mx-10 lg:mx-24 mb-10'>
            <div className='lg:max-w-full md:flex justify-between items-center '>
            <div className='mx-auto pl-3 mt-6 ml-5 '>
                <img className='lg:max-w-lg drop-shadow-2xl' src={banner} alt="banner img" />
                <div className='h-[4px]  md:w-[320px] md:right-[746px] mx-auto w-[230px] absolute left-20 rounded-full bg-gradient-to-r from-[#0353ca] to-[#cd08f5] shadow-xl'></div>
            </div>
            <div className='pt-5 '>
                 <div className='text-center md:text-start'>
                 <img className='w-12 h-12  mx-auto md:mx-0 md:mt-0' src={hi} alt="" />
                 </div>
                <h1 className='text-2xl mt-5 text-center md:text-start text-white font-roboto'>It's me Nahid,  <span className='text-md'>I'm a</span></h1>
               
                {/* Type writer effect */}

               <div className='text-3xl md:text-3xl lg:text-5xl mt-1 text-center md:text-start text-white font-medium  font-roboto'>
               <Typewriter               
               options={{
                   strings: ['Front-End Developer', 'React JS Developer', 'MERN Stack Developer'],
                   autoStart: true,
                   loop:true,
               }}
               />
               </div>

                <p className='text-slate-300 mt-1 text-center md:text-start font-sans-serif'>I build web applications using <span className='text-[#61DAFB] font-bold'>React</span> </p>
                <p className='text-slate-200 mt-3 text-center md:text-start font-sans-serif pr-8'>I am a passionate web developer love to code and take challenges. It's been two years I've been working as a developer. Currently learning Backend technologies and focused on <span>Full Stack Development</span>.</p>

                <div className='mt-10  w-full flex justify-center md:justify-start mx-auto'>
                    <a href="https://github.com/nahid770?tab=repositories" className='text-white flex items-center rounded-full drop-shadow-xl bg-[#7610eb] md:px-8 px-3 py-3 mr-8 font-poppins'>Github<FaGithub className='ml-2 '> </FaGithub> </a>
                    <Link
                    onClick={() => openInNewTab('https://drive.google.com/file/d/1OLr40sqv-LdN1lMcroCDIMuRnLrTXSKw/view?usp=sharing')}
                    className='text-white flex items-center bg-[#342bdb] hover:bg-[#7610eb] rounded-full hover:drop-shadow-xl  px-3 md:px-8 py-3  font-poppins '>Resume <HiDownload className='ml-2'></HiDownload> </Link>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;