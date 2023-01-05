import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Images/img1.jpg'
import { BiLinkExternal } from "react-icons/bi";

const Portfolio = () => {
    return (
        <div className='my-14'>
            <h2 className='text-white text-2xl md:text-3xl lg:text-4xl text-center text-gradient my-16 font-roboto'>Projects I've made</h2>
            <div className='md:flex justify-center items-center gap-2 md:gap-10 lg:gap-14 py-6 border mx-12 md:mx-14 lg:mx-32  md:px-5 lg:px-2'>
                <img className='max-w-32 md:max-w-md' src={img1} alt="img" />
                <div>
                <h2 className='text-white py-3 text-xl text-center md:text-left md:pl-5'>Project Name here</h2>
                <p className='text-white text-center md:text-left'>Project Features</p>
                <p className='text-white text-center md:text-left'>Project Features</p>
                <p className='text-white text-center md:text-left'>Project Features</p>
                <div>
                    <p className='text-white py-4 text-center md:text-left'>Technologys</p>
                </div>
                <div className='text-center'> 
                {/* <Link to='https://authentication-form-498a7.web.app/' className='text-white border mt-14 px-5 py-2 mr-5 md:mr-10'>Github </Link> */}
                <button className='text-white border mt-14 px-5 py-2 '>Live link</button>
                </div>
                </div>          
            </div>
        </div>
    );
};

export default Portfolio;