import React from 'react';
import { FaBootstrap, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiSwiper, SiTailwindcss } from 'react-icons/si';
import motoWorld from '../../Images/motoWorld.png'
import booking from '../../Images/booking.png'
import doctor from '../../Images/dportal.png'
import { BiLinkExternal } from "react-icons/bi";
import './Portfolio.css'
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import agency from '../../Images/agency.png'

const Portfolio = () => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };

    return (
        <div className='md:mt-24'> 
            <div className='relative'>
            <h2 className=' text-2xl md:text-5xl text-center p-2 mb-10 md:mb-16  w-60 md:w-1/3 mx-auto mt-2 font-roboto text-white font-bold '>Projects I've made</h2>
            {/* line */}
            <div className='h-[4px] w-44 md:56 lg:w-72  bg-gradient-to-r from-[#0353ca] to-[#cd08f5] mx-16  md:mx-14 lg:mx-40  md:px-5 lg:px-10 rounded-full  absolute left-10 
            md:left-[366px] bottom-[-3px]'></div>
            </div>


            {/*---------------------- Project Card 1 ------------------ */}
             <div className='projects-Container md:flex justify-center items-center gap-x-10 md:max-w-[1024px] mx-auto mb-12'>
                <div className='image-wrapper flex-1 mx-auto md:mx-0'>
                    <img src={agency} alt="" />
                </div>
                <div className='content flex-1'>
                    <h2 className='project-title2 text-xl text-center md:text-start mt-5 md:mt-0 mx-5 md:mx-0 md:text-2xl text-white mb-3'><span className='font-bold'>Creative Agency </span> A Full-stack &responsive agency website.</h2>

                    <ol className='text-white mt-5  mx-9 md:mx-0 pl-2 md:pl-0'>
                        <li className='text-white text-sm font-roboto'>1. User can register and order any service</li>
                        <li className='text-white text-sm font-roboto'>2. Firebase authentication implemented</li>
                        <li className='text-white text-sm font-roboto'>3. JWT token used to secure API</li>
                        <li className='text-white text-sm font-roboto'>3. CRUD Operation implemented</li>
                    </ol>

                    <div className=''>
                        {/* technology name */}
                        <div className='flex flex-wrap md:justify-start items-center mt-4 mx-5 md:mx-0 justify-center'>
                            <div className='flex items-center'>
                                <FaReact className='text-[#04D3F2]'></FaReact>
                                <p className=' text-white text-sm mr-2'>React</p>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-[#7430F8] ml-1'></SiTailwindcss>
                                <p className=' text-white  text-sm mr-2'>Tailwind CSS</p>
                            </div>
                            <div className='flex items-center'>
                                <SiSwiper className='text-[#0080FF] '></SiSwiper>
                                <p className=' text-white  text-sm mr-2'>Swiper JS</p>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-[#7430F8] ml-1'></SiTailwindcss>
                                <p className=' text-white text-sm mr-2'>Daisy UI</p>
                            </div>
                            <div className='flex items-center'>
                                <FaReact className='text-[#04dcf8] '></FaReact>
                                <p className=' text-white text-sm mr-2'>React-router</p>
                            </div>
                            <div className='flex items-center'>
                                <SiFirebase className='text-[#FFCB2B]'></SiFirebase>
                                <p className=' text-white text-sm mr-2'>Firebase</p>
                            </div>
                            <div className='flex items-center'>
                                <SiExpress className='text-[#AFAEAE] ml-1'></SiExpress>
                                <p className=' text-white text-sm mr-2'>Express Js</p>
                            </div>
                            <div className='flex items-center'>
                                <SiMongodb className='text-[#04B44F]'></SiMongodb>
                                <p className=' text-white text-sm mr-2'>MongoDB</p>
                            </div>
                        </div>
                        {/*Link  */}
                        <div className='flex items-center md:justify-start justify-center mt-5 mx-5 md:mx-0 mb-10 md:mb-0'>
                        <Link  
                        onClick={() => openInNewTab('https://creative-agency-cyan.vercel.app/')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2'>Live site <BiLinkExternal className='inline mb-1'></BiLinkExternal></Link>
                        <Link 
                        onClick={() => openInNewTab('https://github.com/nahid770/creative-agency')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Client-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        <Link 
                        onClick={() => openInNewTab('https://github.com/nahid770/creative-agency-backend')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Server-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/*----------- Projects card 2--------------*/}
            <div className='projects-Container md:flex justify-center items-center gap-x-10 md:max-w-[1024px] mx-auto'>
                <div className='image-wrapper flex-1 mx-auto md:mx-0'>
                    <img className='shadow-2xl' src={motoWorld} alt="" />
                </div>
                <div className='content flex-1'>
                    <h2 className='project-title text-xl text-center md:text-start mt-5 md:mt-0 mx-5 md:mx-0 md:text-2xl text-white mb-3'><span className='font-bold'>Moto World</span> A full-stack responsive bike inventory management web.</h2>

                    <ol className='text-white mt-5  mx-9 md:mx-0 pl-2 md:pl-0'>
                        <li className='text-white text-sm  font-roboto'>1. Implemented Firebase Authentication</li>
                        <li className='text-white text-sm  font-roboto'>2. Email-Password and Social Media Login/Registration system</li>
                        <li className='text-white text-sm  font-roboto'>4. CRUD Operation implemented</li>
                        <li className='text-white text-sm font-roboto'>5. User can Add, Delete, and Update the stock</li>
                    </ol>

                    <div className=''>
                        {/* technology name */}
                        <div className='flex flex-wrap md:justify-start items-center mt-4 mx-5 md:mx-0 justify-center'>
                            <div className='flex items-center'>
                                <FaReact className='text-[#04D3F2]'></FaReact>
                                <p className=' text-white text-sm mr-2'>React</p>
                            </div>
                            <div className='flex items-center'>
                                <FaBootstrap className='text-[#7430F8] ml-1'></FaBootstrap>
                                <p className=' text-white text-sm mr-2'>Bootstrap</p>
                            </div>
                            <div className='flex items-center'>
                                <FaBootstrap className='text-[#7430F8] ml-1'></FaBootstrap>
                                <p className=' text-white text-sm mr-2'>React-Bootstrap</p>
                            </div>
                            <div className='flex items-center'>
                                <FaReact className='text-[#6930c3] ml-1'></FaReact>
                                <p className=' text-white text-sm mr-2'>React-router</p>
                            </div>
                            <div className='flex items-center'>
                                <SiFirebase className='text-[#FFCB2B]'></SiFirebase>
                                <p className=' text-white text-sm mr-2'>Firebase</p>
                            </div>
                            <div className='flex items-center'>
                                <SiExpress className='text-[#AFAEAE] ml-1'></SiExpress>
                                <p className=' text-white text-sm mr-2'>Express Js</p>
                            </div>
                            <div className='flex items-center'>
                                <SiMongodb className='text-[#04B44F]'></SiMongodb>
                                <p className=' text-white text-sm mr-2'>MongoDB</p>
                            </div>
                           
                        </div>
                        {/*Link  */}
                        <div className='flex items-center md:justify-start justify-center mt-5 mx-5 md:mx-0 mb-10 md:mb-0'>
                        <Link  
                        onClick={() => openInNewTab('https://warehouse-management-web-e36b9.web.app/')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2'>Live site <BiLinkExternal className='inline mb-1'></BiLinkExternal></Link>
                        <Link 
                        onClick={() => openInNewTab('https://github.com/nahid770/warehouse-management-web-client')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Client-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        <Link
                        onClick={() => openInNewTab('https://github.com/nahid770/warehouse-management-server')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Server-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/*------------------------  Project Card  3---------------------*/}
             <div className='projects-Container md:flex justify-center items-center gap-x-10 md:max-w-[1024px] mx-auto mt-12 '>
               
               <div className='image-wrapper flex-1 mx-auto md:mx-0'>
                    <img src={doctor} alt="" />
                </div>
              
                <div className='content flex-1'>
                    <h2 className='project-title text-xl text-center md:text-start mt-5 md:mt-0 mx-5 md:mx-0 md:text-2xl text-white mb-3'><span className='font-bold'>Doctors Portal</span> A full-stack responsive Doctor Appointment Booking website.</h2>

                    <ol className='text-white mt-5  mx-9 md:mx-0 pl-2 md:pl-0'>
                        <li className='text-white text-sm font-roboto'>1. Implemented Firebase Authentication</li>
                        <li className='text-white text-sm font-roboto'>2. Email-Password and Social Media Login/Registration system</li>
                        <li className='text-white text-sm font-roboto'>3. Privet Route created. Need to login first to access privet Route</li>
                        <li className='text-white text-sm font-roboto'>4. CRUD Operation implemented</li>
                        <li className='text-white text-sm font-roboto'>5. User can book an appointment on a specific date</li>
                        <li className='text-white text-sm font-roboto'>6. Stripe Payment getway configered</li>
                    </ol>

                    <div className=''>
                        {/* technology name */}
                        <div className='flex flex-wrap md:justify-start items-center mt-4 mx-5 md:mx-0 justify-center'>
                            <div className='flex items-center'>
                                <FaReact className='text-[#04D3F2]'></FaReact>
                                <p className=' text-white text-sm mr-2'>React</p>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-[#0e65c9] ml-1'></SiTailwindcss>
                                <p className=' text-white text-sm mr-2'>Tailwind Css</p>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-[#7430F8] ml-1'></SiTailwindcss>
                                <p className=' text-white text-sm mr-2'>Daisy UI</p>
                            </div>
                            <div className='flex items-center'>
                                <FaNodeJs className='text-[#3DA82A] ml-1'></FaNodeJs>
                                <p className=' text-white text-sm mr-2'>Node Js</p>
                            </div>
                            <div className='flex items-center'>
                                <SiExpress className='text-[#AFAEAE] ml-1'></SiExpress>
                                <p className=' text-white text-sm mr-2'>Express Js</p>
                            </div>
                            <div className='flex items-center'>
                                <SiMongodb className='text-[#04B44F]'></SiMongodb>
                                <p className=' text-white text-sm mr-2'>MongoDB</p>
                            </div>
                            <div className='flex items-center'>
                                <SiFirebase className='text-[#FFCB2B]'></SiFirebase>
                                <p className=' text-white text-sm mr-2'>Firebase</p>
                            </div>
                            <div className='flex items-center'>
                                <FaReact className='text-[#6930c3] ml-1'></FaReact>
                                <p className=' text-white text-sm mr-2'>React-router</p>
                            </div>
                        </div>
                        {/*Link  */}
                        <div className='flex items-center md:justify-start justify-center mt-5 mx-5 md:mx-0 mb-10 md:mb-0'>
                        <Link  
                        onClick={() => openInNewTab('https://doctors-portal-client-web.web.app/')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2'>Live site <BiLinkExternal className='inline mb-1'></BiLinkExternal></Link>
                        <Link 
                        onClick={() => openInNewTab('https://github.com/nahid770/doctors-portal-client-web')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Client-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        <Link
                        onClick={() => openInNewTab('https://github.com/nahid770/doctors-portal-server')}
                        className='bg-[#3f37c9] text-white text-xs md:text-sm rounded-lg px-3 py-2 ml-2'>Server-side <FaGithub className='inline mb-1'></FaGithub></Link>
                        </div>
                        
                    </div>
                </div>
             </div>
            

            {/* --------------------Landing Page Project Card ------------------- */}
            {/* Title */}
            <div>
            <h2 className='text-xl md:text-4xl font-bold mt-8 md:mt-24 text-white pb-1 mb-0 text-center'>Landing Page Design</h2>
           
            <div className='md:max-w-[1024px] mx-16 md:mx-14'>
                
            </div>

            {/* Box / Container*/}
            <div className=' my-10 md:mt-16 '>

                <LandingPage></LandingPage>

            </div>
        </div>
     </div>
    );
};

export default Portfolio;