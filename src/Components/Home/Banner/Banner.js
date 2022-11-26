import React from 'react';
import banner from '../../../Images/banner.png'

const Banner = () => {
    return (
        <div className='lg:max-w-full md:flex justify-between items-center'>
            <div className='mx-auto pl-3 mt-6 ml-5 '>
                <img className='lg:max-w-lg   ' src={banner} alt="banner img" />
                <div className='h-[5px] md:hidden mx-auto w-3/4 absolute left-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl'></div>
            </div>
            <div className='pt-5 '>
                <h1 className='text-white text-5xl text-center '>Hey,👋</h1>
                <h1 className='text-[#F5E435] text-4xl mt-5 text-center'>It's Nahid</h1>
                <h2 className='text-[#61DAFB] text-6xl mt-3 text-center  '>Front-End Developer</h2>

                <div className='mt-6 text-center'>
                    <button className=' px-12 py-3 text-white bg-gradient-to-r from-sky-500 to-indigo-800 rounded-full '>Hire me</button>
                    <button className=' px-12 py-3  text-white bg-gradient-to-r from-sky-500 to-indigo-800 rounded-full ml-5'>Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;