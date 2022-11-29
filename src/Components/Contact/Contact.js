import React from 'react';
import contact from '../../Images/contact.svg'
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import me from '../../Images/banner.png'

const Contact = () => {
    return (
        <div >
           
            
            <div className='md:flex justify-between items-center  mt-6 px-1 md:px-3 lg:px-16 md:mx-2 lg:mx-36 md:space-x-6 lg:space-x-24 rounded-md mr-10 ml-10 md:mr-14 md:ml-14'>
            
            <div>
            <div className='bg-purple-600/[.05] rounded-md flex justify-center items-center mb-10  '>
            <img className='w-12 h-12 p-1 my-2 hidden md:block rounded-full border  border-indigo-700  ' src={me} alt="" />
            <h1 className='text-white text-2xl md:text-3xl lg"text-4xl text-center  border-indigo-700 font-roboto pl-2'>Contact with me</h1>
                    </div>
            <img className='max-w-xs md:max-w-xs lg:max-w-sm pb-5 pt-3 ' src={contact} alt="contact" />
            </div>
            <div className='border p-5 rounded-md  mb-20 md:mb-2'>
                <div className='border p-3 mb-3'>
                    <h2 className='text-white text-2xl mb-2 border-indigo-600 font-sans-serif'>Reach me Directly</h2>

                    <div className='flex justify-start items-center'>
                    <p><FiMail className='text-white'></FiMail></p>
                    <p className='text-white pl-2'><span className='font-poppins'> Email:</span> nurnahid70@gmail.com</p>
                    </div>
                    <div className='flex justify-start items-center'>
                    <p><FiPhone className='text-white'></FiPhone></p>
                    <p className='text-white pl-2'><span className='font-poppins'> Phone:</span> +8801925118101</p>
                    </div>
                    <div className='flex justify-start items-center'>
                    <p><FaWhatsapp className='text-white '></FaWhatsapp></p>
                    <p className='text-white pl-2'><span className='font-poppins'>Whatsapp:</span> +8801885688950</p>
                    </div>
                    
                </div>
                <form action="">
                    <input className='font-sans-serif border px-3 text-white border-indigo-700 bg-indigo-800/[.05] py-3 w-full mb-3 rounded-xl outline-none  mx-auto ' type="text" name="name" id="" placeholder='Your name' required/> <br />
                    <input className='font-sans-serif border text-white px-3 py-3 w-full bg-indigo-800/[.05]   mb-3 rounded-xl outline-none mx-auto border-indigo-700' type="email" name="emial" id="" placeholder='Your email' required/>

                    <textarea className='font-sans-serif pt-2 rounded-md w-full outline-none border-indigo-700 bg-indigo-800/[.05]  px-3  border text-white ' name="description" id="" cols="31" rows="6" placeholder='Type your message'></textarea>

                    <button className='w-full py-2 border-indigo-700 border hover:border-indigo-800 bg-indigo-800/[.05]  text-white mt-2 font-roboto'> Send </button>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;