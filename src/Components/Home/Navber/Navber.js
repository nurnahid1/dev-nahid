import React from 'react';
import { Link } from 'react-router-dom';
import {HomeIcon, SunIcon, StarIcon, IdentificationIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import './Navber.css'

const Navber = () => {
    return (
        <div className='mx-10 md:mx-14 lg:mx-32'>
            <div className='flex justify-between mt-5 md:mt-10'>
            <div>
              <h2 className='text-white text-2xl font-poppins font-medium'>Nahid</h2>
            </div>

            {/* desktop version */}
            <div className='lg:max-w-lg max-w-xs hidden md:block lg:block'>
                <Link className='mr-5 text-white font-normal p-2  font-poppins' to="/">Home</Link>
                <Link className='mr-5 p-2 font-poppins font-normal text-white' to="/about">About</Link>
                <Link className='mr-5 text-white font-normal p-2  font-poppins' to="/skill">Skills</Link>
                <Link className='mr-5 text-white font-normal p-2  font-poppins' to="/portfolio">Portfolio</Link>
                <Link className='mr-5 text-white font-normal p-2  font-poppins' to="/blog">Blog</Link>
                <Link className='mr-5 text-white font-normal p-2  font-poppins' to="/contact">Contact</Link>
            </div>

            <div >
            <SunIcon className='text-white w-6 h-6'></SunIcon>
            </div>
            </div>
            {/*navber mobile version */}
            
            <div className='md:hidden mt-10 lg:hidden z-10 bg-slate-900 flex w-full  fixed bottom-0 right-0  mb-0 p-3'>
            <Link className='w-10 h-8 mx-8 text-gradient' to='/'><HomeIcon className=''></HomeIcon></Link>
            <Link className='w-10 h-8 mr-8 text-gradient' to='/skill'><StarIcon ></StarIcon></Link>
            <Link className='w-10 h-8 mr-8 text-gradient' to='/about'><IdentificationIcon></IdentificationIcon> </Link>
            <Link className='w-10 h-8 mr-8 text-gradient' to='/portfolio'> < BriefcaseIcon></BriefcaseIcon></Link>
            <Link className='w-10 h-8 mr-8 text-gradient' to='/contact'> <PhoneIcon></PhoneIcon></Link>
            </div>





        
        </div>
    );
};

export default Navber;