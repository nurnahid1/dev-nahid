import React from 'react';
import { Link } from 'react-router-dom';
import {HomeIcon, SunIcon, StarIcon, IdentificationIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import logo from '../../../Images/logo.svg'

const Navber = () => {
    return (
        <div>
            <div className='flex justify-between mt-5 md:mt-10'>
            <div>
                <img className='w-12 h-12' src={logo} alt="" />
            </div>

            {/* desktop version */}
            <div className='lg:max-w-lg max-w-xs hidden md:block lg:block'>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/">Home</Link>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/about">About</Link>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/skill">Skills</Link>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/portfolio">Portfolio</Link>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/blog">Blog</Link>
                <Link className='mr-5 text-white font-bold border border-violet-400 hover:text-black hover:bg-[#61DAFB]	 bg-slate-400 p-2 rounded-md ' to="/contact">Contact</Link>
            </div>

            <div >
            <SunIcon className='text-white w-6 h-6'></SunIcon>
            </div>
            </div>
            {/*navber mobile version */}
            
            <div className='block md:hidden bg-black mt-10 lg:hidden flex w-full  fixed bottom-0 right-0  mb-0 p-3 rounded-md'>
            <Link className='w-10 h-8 mx-8 text-white' to='/'><HomeIcon className=''></HomeIcon></Link>
            <Link className='w-10 h-8 mr-8 text-white' to='/skill'><StarIcon ></StarIcon></Link>
            <Link className='w-10 h-8 mr-8 text-white' to='/about'><IdentificationIcon></IdentificationIcon> </Link>
            <Link className='w-10 h-8 mr-8 text-white' to='/portfolio'> < BriefcaseIcon></BriefcaseIcon></Link>
            <Link className='w-10 h-8 mr-8 text-white' to='/contact'> <PhoneIcon></PhoneIcon></Link>
            </div>





        
        </div>
    );
};

export default Navber;