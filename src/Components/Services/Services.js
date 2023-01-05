import React from 'react';
import { BsFront } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";

// animation 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Services = () => {
    return (
        <div className='mx-10 md:mx-16 lg:mx-32 mb-16 mt-6 ' >
            <h2 className='text-xl md:text-3xl lg:text-4xl text-white mb-12 text-center font-roboto text-gradient '>Services I porvide</h2>

            <div className='grid grid-cols-1 md:grid-cols-3  space-y-8 md:space-y-0 gap-5 md:gap-4'>
                {/* service card */}
            <div className='max-w-sm md:w-1/2 h-44 lg:w-lg border rounded-m py-2' data-aos="zoom-in-up">
                <p><FaFigma className='w-12 h-12 text-gradient mx-auto my-3'></FaFigma></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>Figma to HTML5</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam.</p>
            </div>
            <div className='max-w-sm md:w-1/2 h-44 lg:w-lg border rounded-m py-2' data-aos="zoom-in-up">
                <p><FaFigma className='w-12 h-12 text-gradient mx-auto my-3'></FaFigma></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>Figma to React</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam.</p>
            </div>
            <div className='max-w-sm md:w-1/2 lg:w-1/3 border rounded-m py-2' data-aos="zoom-in-up">
                <p><BsFront className='w-12 h-12 text-gradient mx-auto my-3'></BsFront></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>Front-End Development</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam.</p>
            </div>
            <div className='max-w-sm md:w-1/2 lg:w-1/3 border rounded-m py-2' data-aos="zoom-in-up" >
                <p><RiAppsFill className='w-12 h-12 text-gradient mx-auto my-3'></RiAppsFill></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>MERN Stack Development</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam go. </p>
            </div>
            <div className='max-w-sm md:w-1/2 lg:w-1/3 border rounded-m py-2' data-aos="zoom-in-up" >
                <p><RiAppsFill className='w-12 h-12 text-gradient mx-auto my-3'></RiAppsFill></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>Fully Responsive Design</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam go. </p>
            </div>
            <div className='max-w-sm md:w-1/2 lg:w-1/3 border rounded-m py-2' data-aos="zoom-in-up" >
                <p><RiAppsFill className='w-12 h-12 text-gradient mx-auto my-3'></RiAppsFill></p>
                <h1 className='text-xl md:text-2xl lg:text-2xl font-roboto text-center text-gradient'>Website Bug Fixing</h1>
                <p className='text-slate-100 px-3 text-center pt-4 pb-5 font-sans-serif text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam possimus quis aperiam. Quaerat, veritatis. Doloribus placeat a at quisquam go. </p>
            </div>
         
            </div>
        </div>
    );
};

export default Services;