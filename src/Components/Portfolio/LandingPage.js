import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
// import doctor from '../../Images/landing.png'
import landing1 from '../../Images/landing1.png'
import './LandingPage.css'


const LandingPage = () => {
    return (
            <div className='container relative '>
                <div className='image-wrapper-l  mx-auto shadow-md'>
                    <img className='image  overflow-hidden ' src={landing1} alt="" />
            
                    <div className="middle">
                        <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' target='blank' href="https://nextlight-landing-git-main-nahid770.vercel.app/">view site</a>
                            <BiLinkExternal></BiLinkExternal>
                        </div>
                    </div>
                    
                    <div className='overley absolute '></div>
               </div>
               <div className='w-2/3 mx-auto'>
               <p className='text-white font-popins text-center py-1 mt-2 text-g '>Responsive NFT Landing</p>
               </div>
            </div>
    );
};

export default LandingPage;