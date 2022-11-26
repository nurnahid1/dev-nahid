import React from 'react';
import Navber from '../Home/Navber/Navber';
import contact from '../../Images/contact.svg'

const Contact = () => {
    return (
        <div className='mr-20 ml-20'>
            <Navber></Navber>
            
            <div className='md:flex justify-between items-center border mt-10 px-5 md:px-10 lg:px-12 mx-5 md:mx-14 lg:mx-32 lg:space-x-20 rounded-md'>
            
            <div>
            <img className='max-w-sm md:max-w-md py-5' src={contact} alt="contact" />
            </div>
            <div className='border p-5 rounded-md '>
                <form action="">
                    <input className='border px-3 py-3 w-full mb-3 rounded-xl outline-none mx-auto bg-transparent' type="text" name="name" id="" placeholder='Your name' required/> <br />
                    <input className='border px-3 py-3 w-full  mb-3 rounded-xl outline-none mx-auto bg-transparent' type="email" name="emial" id="" placeholder='Your email' required/>

                    <textarea className='rounded-md w-full px-3 bg-transparent border' name="description" id="" cols="31" rows="6" placeholder='Type your message'></textarea>

                    <button className='w-full py-2 bg-[#02BEDB] hover:bg-none hover:border-blue-700  text-white'> Send </button>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;