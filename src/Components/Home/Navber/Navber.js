import React from 'react';
import { Link } from 'react-router-dom';
import {HomeIcon, SunIcon, StarIcon, IdentificationIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import './Navber.css'

const Navber = () => {
    return (
        <div className='mx-10 md:mx-14 lg:mx-32'>
            <div className='flex justify-between mt-5 md:mt-10'>
            <div>
              <h2 className='logo text-2xl font-poppins'>Nahid</h2>
            </div>

            {/* desktop version */}
            <div className='lg:max-w-lg max-w-xs hidden md:block lg:block'>
                <Link className='mr-5 hover:border-b-slate-300  hover:border-b-2 text-slate-300 font-bold  p-2 rounded-md font-open-sans' to="/">Home</Link>
                <Link className='mr-5 text-slate-300 font-bold   p-2 rounded-md font-open-sans hover:border-b-slate-300  hover:border-b-2' to="/about">About</Link>
                <Link className='mr-5 text-slate-300 font-bold   hover:border-b-slate-300  hover:border-b-2 rounded-md font-open-sans  p-2' to="/skill">Skills</Link>
                <Link className='mr-5 text-slate-300 font-bold    hover:border-b-slate-300  hover:border-b-2 rounded-md font-open-sans pb-2' to="/portfolio">Portfolio</Link>
                <Link className='mr-5 text-slate-300 font-bold  hover:border-b-2 hover:border-b-slate-300 p-2 rounded-md font-open-sans ' to="/blog">Blog</Link>
                <Link className='mr-5 text-slate-300 font-bold hover:border-b-slate-300  hover:border-b-2 p-2 rounded-md font-open-sans' to="/contact">Contact</Link>
            </div>

            <div >
            <SunIcon className='text-white w-6 h-6'></SunIcon>
            </div>
            </div>
            {/*navber mobile version */}
            
            <div className='block md:hidden bg-black mt-10 lg:hidden flex w-full  fixed bottom-0 right-0  mb-0 p-3'>
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