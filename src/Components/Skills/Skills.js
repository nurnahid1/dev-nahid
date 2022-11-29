import React from 'react';
import {  FaBootstrap, FaChrome, FaCode, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa';
import { AiOutlineApi } from "react-icons/ai";
import './Skill.css'
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiFirebase, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className=' '>
            <div className=''>
            <div className='pt-3'>
                <h1 className=' text-3xl md:text-4xl text-center p-2 mb-10 skills rounded-sm w-60 md:w-1/3 mx-auto mt-2 font-roboto skillsBg'>Skills Overview</h1>
            </div>
            {/* Front-End  */}
            <div>
                
                <h2 className=' md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pl-3 pb-2 '>Front-End Technology</h2>
                {/* line */}
                <div className='h-[3px] w-20 md:24 lg:w-32  bg-gradient-to-r from-[#d4d4d4] to-[#474747]  bg-slate-200 mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded absolute left-3'></div>

            <div className='grid grid-cols-1 md:grid-cols-3 mx-16 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-5 md:mx-14 lg:mx-32 md:px-5 lg:px-10 mt-8'>
                    
                    <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#7430F8] hover:bg-[#6A10F3]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif'>Bootstrap 5</h2>
                       <p><FaBootstrap className='w-8 h-8 text-white font-bold'></FaBootstrap> </p>
                       </div>
                       <p className='mt-12 font-sans-serif'>The world's most popular CSS framework</p>
                   </div>
                   <div className='w-56 h-40 px-4 py-3 rounded-md bg-[#38BDF8] hover:bg-[#0da6da]'>
                      <div className='flex justify-between items-center  '>
                      <h2 className=' text-2xl  font-bold text-white font-sans-serif'>Tailwind CSS</h2>
                       <p> <SiTailwindcss  className='w-8 h-8 text-white font-bold'></SiTailwindcss></p>
                      </div>
                       <p className='mt-12 font-sans-serif'>A utility-first CSS framework</p>
                   </div>
                   <div className='w-56 h-40 px-4 py-3 rounded-md bg-[#f3dc2e] hover:bg-[#F7E025]'>
                      <div className='flex justify-between items-center  '>
                      <h2 className=' text-2xl font-bold text-white font-sans-serif'>Javascript</h2>
                       <p> <DiJavascript1  className='w-8 h-8 text-white font-bold'></DiJavascript1></p>
                      </div>
                       <p className=' text-xl font-bold font-sans-serif '>ES6</p>
                       <p className=' mt-3 pt-3 font-sans-serif'>Programming Language for the Web</p>
                   </div>
                   <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#04D3F2] hover:bg-[#02bedb]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif'>React 18</h2>
                       <p><FaReact className='w-8 h-8 text-white font-bold'></FaReact> </p>
                       </div>
                       <p className='mt-12 font-sans-serif'>Most popular JavaScript library</p>
                   </div>
                   <div className='w-56 h-22 rounded-md px-4 py-3 bg-[#20232A] hover:bg-[#02bedb]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif'>React Bootstrap</h2>
                       <p><FaBootstrap className='w-8 h-8 text-white font-bold'></FaBootstrap> </p>
                       </div>
                   </div>
                   <div className='w-56 h-22 rounded-md px-4 py-3 bg-[#BE04CD] hover:bg-[#a505c2]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif'>Daisy UI</h2>
                       <p><SiTailwindcss className='w-8 h-8 text-white font-bold'></SiTailwindcss> </p>
                       </div>
                   </div>
            </div>
                {/* backend */}
                <h2 className=' md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pb-2 pl-4 pt-4'>Backend Technology</h2>
                {/* line */}
                <div className='h-[3px] w-20 md:24 lg:w-32  bg-gradient-to-r from-[#d4d4d4] to-[#474747]  bg-slate-200 mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded absolute left-3 '></div>

                <div className='grid grid-cols-1 md:grid-cols-3 mx-16 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-5 md:mx-14 lg:mx-32 md:px-5 lg:px-10 mt-8'>

                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#6BBF47] hover:bg-[#3DA82A]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Node JS</h2>
                    <p><FaNodeJs className='w-8 h-8 text-white font-bold'></FaNodeJs> </p>
                    </div>
                    <p className='mt-12 font-sans-serif'>Cross-platform JavaScript runtime environment</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#7E7E7E] hover:bg-[#afaeae]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Express JS</h2>
                    <p><SiExpress className='w-8 h-8 text-white font-bold'></SiExpress></p>
                    </div>
                    <p className='mt-12 font-sans-serif'>Cross-platform JavaScript runtime environment</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#116149] hover:bg-[#03c252ea]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Mongo DB</h2>
                    <p><SiMongodb className='w-8 h-8 text-white font-bold'></SiMongodb></p>
                    </div>
                    <p className='mt-12 font-sans-serif'>Document based database</p>
                </div>
                <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#794ebe] hover:bg-[#6b3bb8]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Redux</h2>
                    <p><SiRedux className='w-8 h-8 text-white font-bold'></SiRedux></p>
                    </div>
                    <p className='mt-12 font-sans-serif'>Comming soon...</p>
                </div>
                <div className='w-56 h-24 rounded-md px-4 py-3 bg-[#a5a7a7] hover:bg-[#5c5e5e]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>API</h2>
                    <p><AiOutlineApi className='w-8 h-8 text-white font-bold'></AiOutlineApi></p>
                    </div>
                   
                </div>
                </div>
               {/* tools */}
               <h2 className=' md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pb-3 pl-4 pt-4'>Tools</h2>
               {/* line */}
               <div className='h-[3px]  md:24 lg:w-32  bg-gradient-to-r from-[#d4d4d4] to-[#474747]  bg-slate-200 mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded absolute left-3 '></div>

               <div className='grid grid-cols-1 md:grid-cols-3 mx-16 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-5 md:mx-14 lg:mx-32 md:px-5 lg:px-10 mt-5'>

               <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#38A3EB] hover:bg-[#2c92d6]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Visual Studio Code</h2>
                    <p><FaCode className='w-8 h-8 text-white font-bold'></FaCode></p>
                    </div>
                    <p className='mt-6 font-sans-serif'> A Free, lightweight and powerful  code editor</p>
                </div>
               <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#F76E5F] hover:bg-[#EA4C1D]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Figma</h2>
                    <p><FaFigma className='w-8 h-8 text-white font-bold'></FaFigma></p>
                    </div>
                    <p className='mt-14 font-sans-serif'> Figma is a cloud-based design tool</p>
                </div>
               <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#36A351] hover:bg-[#2f8d47]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Chrome dev tool</h2>
                    <p><FaChrome className='w-8 h-8 text-white font-bold'></FaChrome></p>
                    </div>
                    <p className='mt-6 font-sans-serif'> Chrome DevTools is a set of web developer tools. </p>
                </div>
               <div className='w-56 h-40 rounded-md px-4 py-3 bg-[#FFCB2B] hover:bg-[#FFA610]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Firebase</h2>
                    <p><SiFirebase className='w-8 h-8 text-white font-bold'></SiFirebase></p>
                    </div>
                    <p className='mt-14 font-sans-serif'> Firebase is a Backend-as-a-Service of google</p>
                </div>
               </div>
                
              
                
            </div>
            </div>
        </div>
    );
};

export default Skills;