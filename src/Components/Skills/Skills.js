import React from 'react';
import {  FaBootstrap, FaChrome, FaCode, FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { AiOutlineApi } from "react-icons/ai";
import './Skill.css'
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className=' '>
            <div className=''>
            <div className='pt-3 relative'>
                <h1 className=' text-3xl md:text-5xl text-center p-2 mb-10 skills rounded-sm w-60 md:w-1/3 mx-auto mt-2 font-roboto skillsBg  '>Skills Overview</h1>
                {/* line */}
                <div className='h-[2px] w-44 md:24 lg:w-60  bg-gradient-to-r from-[#000814] to-[#fff] mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded-full  absolute left-10 md:left-96 bottom-1'></div>
            </div>
            {/* Front-End  */}
            <div>
                
                <h2 className='text-xl md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pl-3  '>Front-End Technology</h2>
                {/* line */}
                <div className='h-[3px] w-28 md:w-36 lg:w-48 bg-gradient-to-r from-[#000814] to-[#fff] mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded-full absolute left-1 mt-1'></div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-2 pb-5 mt-5 md:max-w-[1024px] mx-auto'>
                    
                    <div className='w-56 h-20 mx-auto md:mx-0 lg:mx-0 rounded-md px-4 py-3 bg-[#E96227] hover:bg-[#DE4B25]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>HTML</h2>
                       <p><FaHtml5 className='w-8 h-8 mt-3 text-white font-bold'></FaHtml5> </p>
                       </div>
                   </div>
                    <div className='w-56 h-20 mx-auto md:mx-0 lg:mx-0 rounded-md px-4 py-3 bg-[#2862E9] hover:bg-[#254BDD]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>CSS</h2>
                       <p><FaCss3Alt className='w-8 h-8 mt-3 text-white font-bold'></FaCss3Alt> </p>
                       </div>
                   </div>
                    <div className='w-56 h-20 mx-auto md:mx-0 lg:mx-0 rounded-md px-4 py-3 bg-[#7430F8] hover:bg-[#6A10F3]'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>Bootstrap</h2>
                       <p><FaBootstrap className='w-8 h-8 mt-3 text-white font-bold'></FaBootstrap> </p>
                       </div>
                   </div>
                   <div className='w-56 h-20 px-4 py-3 rounded-md bg-[#38BDF8] hover:bg-[#0da6da] mx-auto md:mx-0 lg:mx-0'>
                      <div className='flex justify-between items-center  '>
                      <h2 className=' text-2xl  font-bold text-white font-sans-serif mt-3'>Tailwind CSS</h2>
                       <p> <SiTailwindcss  className='w-8 h-8 mt-3 text-white font-bold'></SiTailwindcss></p>
                      </div>
                       
                   </div>
                   <div className='w-56 h-20 px-4 py-3 rounded-md bg-[#f3dc2e] hover:bg-[#F7E025] mx-auto md:mx-0 lg:mx-0'>
                      <div className='flex justify-between items-center  '>
                      <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3 mb-0'>Javascript</h2>
                       <p> <SiJavascript  className='w-8 h-8 mt-3  text-white font-bold'></SiJavascript></p>
                      </div>
                       <p className=' font-bold font-sans-serif mb-1 text-sm'>(ES6)</p>
                   </div>
                   <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#04D3F2] hover:bg-[#02bedb] mx-auto md:mx-0 lg:mx-0'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>React</h2>
                       <p><FaReact className='w-8 h-8 mt-3 text-white font-bold'></FaReact> </p>
                       </div>
                   </div>
                   <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#20232A] hover:bg-[#02bedb] mx-auto md:mx-0 lg:mx-0'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif'>React Bootstrap</h2>
                       <p><FaBootstrap className='w-8 h-8 text-white font-bold'></FaBootstrap> </p>
                       </div>
                   </div>
                   <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#BE04CD] hover:bg-[#a505c2] mx-auto md:mx-0 lg:mx-0'>
                       <div className='flex justify-between items-center '>
                       <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>Daisy UI</h2>
                       <p><SiTailwindcss className='w-8 h-8 mt-3 text-white font-bold'></SiTailwindcss> </p>
                       </div>
                   </div>
            </div>
                {/* backend */}
                <h2 className='text-xl md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pl-4 pt-2'>Backend Technology</h2>
                {/* line */}
                <div className='h-[3px]  w-28 md:w-36 lg:w-48 bg-gradient-to-r from-[#000814] to-[#fff] mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded-full absolute left-3 '></div>

                <div className='grid grid-cols-1 md:grid-cols-3 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-1 md:max-w-[1024px] mx-auto mt-5'>

                <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#6BBF47] hover:bg-[#3DA82A] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif mt-3'>Node JS</h2>
                    <p><FaNodeJs className='w-8 h-8 mt-3 text-white font-bold'></FaNodeJs> </p>
                    </div>
                </div>
                <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#7E7E7E] hover:bg-[#afaeae] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl mt-3 font-bold text-white font-sans-serif'>Express JS</h2>
                    <p><SiExpress className='w-8 h-8 mt-3 text-white font-bold'></SiExpress></p>
                    </div>
                </div>
                <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#116149] hover:bg-[#03c252ea]  mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold mt-3 text-white font-sans-serif'>Mongo DB</h2>
                    <p><SiMongodb className='w-8 h-8 mt-3 text-white font-bold'></SiMongodb></p>
                    </div>
                </div>
                {/* <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#794ebe] hover:bg-[#6b3bb8]'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Redux</h2>
                    <p><SiRedux className='w-8 h-8 text-white font-bold'></SiRedux></p>
                    </div>
                    <p className='mt-12 font-sans-serif'>Comming soon...</p>
                </div> */}
                <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#a5a7a7] hover:bg-[#5c5e5e] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold mt-3 text-white font-sans-serif'>API</h2>
                    <p><AiOutlineApi className='w-8 h-8 mt-3 text-white font-bold'></AiOutlineApi></p>
                    </div>
                </div>
                </div>
               {/* tools */}
               <h2 className=' text-xl md:text-3xl lg:text-3xl text-gradient mx-16  md:mx-14 lg:mx-32 md:px-5 lg:px-10 pl-4 pt-4'>Tools</h2>
               {/* line */}
               <div className='h-[3px] w-28 md:w-28 lg:w-32 bg-gradient-to-r from-[#000814] to-[#fff] mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded-full absolute left-3 '></div>

               <div className='grid grid-cols-1 md:grid-cols-3 pl-3 lg:grid-cols-4 gap-3 md:gap-2 lg:gap-5 pb-5 md:max-w-[1024px] mx-auto mt-5'>

               <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#38A3EB] hover:bg-[#2c92d6] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl mt-3 font-bold text-white font-sans-serif'>VS Code</h2>
                    <p><FaCode className='w-8 h-8 mt-3 text-white font-bold'></FaCode></p>
                    </div>
                </div>
               <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#F76E5F] hover:bg-[#EA4C1D] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold mt-3 text-white font-sans-serif'>Figma</h2>
                    <p><FaFigma className='w-8 h-8 mt-3 text-white font-bold'></FaFigma></p>
                    </div>
                </div>
               <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#36A351] hover:bg-[#2f8d47] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold text-white font-sans-serif'>Chrome dev tool</h2>
                    <p><FaChrome className='w-8 h-8 text-white font-bold'></FaChrome></p>
                    </div>
                </div>
               <div className='w-56 h-20 rounded-md px-4 py-3 bg-[#FFCB2B] hover:bg-[#FFA610] mx-auto md:mx-0 lg:mx-0'>
                    <div className='flex justify-between items-center '>
                    <h2 className=' text-2xl font-bold mt-3 text-white font-sans-serif'>Firebase</h2>
                    <p><SiFirebase className='w-8 h-8 mt-3 text-white font-bold'></SiFirebase></p>
                    </div>
                </div>
               </div>
                
            </div>
            </div>
        </div>
    );
};

export default Skills;