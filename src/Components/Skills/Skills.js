import React from 'react';
import {  FaNodeJs, FaReact } from 'react-icons/fa';
import Navber from '../Home/Navber/Navber';
import './Skill.css'
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className=' '>
            <Navber></Navber>
            <div className=''>
            <div className='pt-3'>
                <h1 className='text-white text-3xl md:text-4xl text-center p-2 mb-10 skills rounded-sm w-60 md:w-1/3 mx-auto mt-2 '>Skills Overview</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-16 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-5 md:mx-14 lg:mx-32 md:px-5 lg:px-10'>

                 <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#7430F8] hover:bg-[#6A10F3]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>Bootstrap 5</h2>
                    <p><FaNodeJs className='w-8 h-8 text-white font-bold'></FaNodeJs> </p>
                    </div>
                    <p className='mt-12 '>The world's most popular CSS framework</p>
                </div>
                <div className='w-56 h-40 px-4 py-3 rounded-md bg-[#38BDF8] hover:bg-[#0da6da]'>
                   <div className='flex justify-between items-center  '>
                   <h2 className=' text-2xl  font-bold text-white'>Tailwind CSS</h2>
                    <p> <SiTailwindcss  className='w-8 h-8 text-white font-bold'></SiTailwindcss></p>
                   </div>
                    <p className='mt-12'>A utility-first CSS framework</p>
                </div>
                <div className='w-56 h-40 px-4 py-3 rounded-md bg-[#f3dc2e] hover:bg-[#F7E025]'>
                   <div className='flex justify-between items-center  '>
                   <h2 className=' text-2xl font-bold text-white'>Javascript</h2>
                    <p> <DiJavascript1  className='w-8 h-8 text-white font-bold'></DiJavascript1></p>
                   </div>
                    <p className=' text-xl font-bold '>ES6</p>
                    <p className=' mt-3 pt-3'>Programming Language for the Web</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#04D3F2] hover:bg-[#02bedb]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>React 18</h2>
                    <p><FaReact className='w-8 h-8 text-white font-bold'></FaReact> </p>
                    </div>
                    <p className='mt-12 '>Most popular JavaScript library</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#6BBF47] hover:bg-[#3DA82A]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>Node JS</h2>
                    <p><FaNodeJs className='w-8 h-8 text-white font-bold'></FaNodeJs> </p>
                    </div>
                    <p className='mt-12 '>Cross-platform JavaScript runtime environment</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#7E7E7E] hover:bg-[#afaeae]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>Express JS</h2>
                    <p><SiExpress className='w-8 h-8 text-white font-bold'></SiExpress></p>
                    </div>
                    <p className='mt-12 '>Cross-platform JavaScript runtime environment</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#116149] hover:bg-[#03c252ea]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>Mongo DB</h2>
                    <p><SiMongodb className='w-8 h-8 text-white font-bold'></SiMongodb></p>
                    </div>
                    <p className='mt-12 '>Document based database</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#794ebe] hover:bg-[#6b3bb8]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white'>Redux</h2>
                    <p><SiMongodb className='w-8 h-8 text-white font-bold'></SiMongodb></p>
                    </div>
                    <p className='mt-12 '>Comming soon...</p>
                </div>
               
               
                
              
                
            </div>
            </div>
        </div>
    );
};

export default Skills;