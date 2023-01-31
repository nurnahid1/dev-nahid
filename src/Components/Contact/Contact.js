import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import contact from '../../Images/contact.svg'
import contact from '../../Images/contact.png'

import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import me from '../../Images/banner.png'
import { toast } from 'react-toastify';
import './Contact.css'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3hvh9cm', 'template_6jwwe41', form.current, 'ajVaVul9L4hNWCRfM')
      .then((result) => {
          toast.success('Message send successfully!')
      }, (error) => {
          toast.error(error.message)
      });
      e.target.reset();
  };
    return (
        <div >
           
           <div className=' flex justify-center items-center mb-10  '>
            <img className='w-12 h-12 p-1 my-2 hidden md:block rounded-full border  border-indigo-700  ' src={me} alt="" />
            <h1 className=' text-2xl md:text-3xl lg:text-5xl text-center  border-indigo-700 font-roboto pl-2 text-white font-bold'>Contact with me</h1>
            </div>

            
            <div className='md:flex justify-evenly items-center  mt-6 px-1 md:px-3 lg:px-16 md:mx-2 lg:mx-36 md:space-x-6 lg:space-x-24 rounded-md mx-5 md:mr-14 md:ml-14'>
            
            <div>
            
            <img className='max-w-xs md:max-w-xs lg:max-w-md pb-5 pt-3 mx-auto px-3 md:px-0 drop-shadow-2xl' src={contact} alt="contact" />
            </div>

            <div className=' p-5 mt-6 md:mt-0  mb-20 md:mb-2'>
                <div className='rounded-lg shadow-md p-3 mb-3 contactme '>
                    <h2 className='text-white text-2xl mb-2  font-sans-serif'>Reach me Directly</h2>

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
                <form className='md:p-5 p-5 form rounded-md' action="" ref={form} onSubmit={sendEmail}>
                    <input className='font-sans-serif  px-3 text-gradient border rounded-md  py-3 w-full  mb-3  outline-none  mx-auto ' type="text" name="client-name" id="" placeholder='Your name' required/> <br />
                    <input className='font-sans-serif text-gradient  px-3 py-3 w-full  mb-3 border outline-none mx-auto rounded-md ' type="email" name="email" id="" placeholder='Your email' required/>

                    <textarea className='font-sans-serif pt-2 w-full outline-none text-gradient px-3 border rounded-md' name="message" id="" cols="31" rows="6" placeholder='Type your message'></textarea>

                    <button className='w-full py-2 bg-[#7610EB] hover:bg-[#a818fb] rounded-md text-white mt-2 font-roboto'> send message</button>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;