import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
// import doctor from '../../Images/landing.png'
import doctor from '../../Images/nft.jpg'
import './LandingPage.css'


const LandingPage = () => {
    return (
            <div className='container relative '>
                <div className='image-wrapper-l shadow-md mx-auto'>
                    <img className='image overflow-hidden ' src={doctor} alt="" />
            
                    <div className="middle">
                        <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' href="">Loading...</a>
                            <BiLinkExternal></BiLinkExternal>
                        </div>
                    </div>
                    
                    <div className='overley absolute '></div>
               </div>
            </div>
    );
};

export default LandingPage;