import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
// import doctor from '../../Images/landing.png'
import landing1 from '../../Images/landing1.png'
import landing2 from '../../Images/luxury.png'
import landing3 from '../../Images/landing3.png'
import booking from '../../Images/booking.png'
import './LandingPage.css'


const LandingPage = () => {
    return (
            <div className=' flex flex-col md:flex-row  justify-center items-center mx-16'>

            

                        {/* Landing page 1 */}
               <div className='container relative'>
                <div className='image-wrapper-l  mx-auto shadow-md rounded-sm'>
                    <img className='image  overflow-hidden ' src={landing1} alt="" />
                     <div className="middle">
                            <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' target='blank' href="https://nextlight-landing-git-main-nahid770.vercel.app/">view site</a>
                            <BiLinkExternal></BiLinkExternal>
                            </div>
                        </div>
                    <div className='overley absolute '></div>
                </div>
                <div className=' w-2/3 mx-auto'>
                <p className='text-white font-popins text-center py-1 mt-2 text-g '>NFT Landing Page</p>
                </div>
               </div>

               {/* landing page 2 */}
               <div className='container relative mt-10 md:mt-0'>
                <div className='image-wrapper-l  mx-auto shadow-md rounded-sm'>
                        <img className='image  overflow-hidden ' src={landing2} alt="" />
                        <div className="middle">
                            <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' target='blank' href="https://luxury-living-website.vercel.app/">view site</a>
                            <BiLinkExternal></BiLinkExternal>
                            </div>
                        </div>
                    <div className='overley absolute '></div>
                </div>
                <div className=' w-2/3 mx-auto'>
                    <p className='text-white font-popins text-center py-1 mt-2 text-g '>Interior Design Landing</p>
                </div>
               </div>
               {/* Landing Page 3 */}
               <div className='container relative mt-10 md:mt-0'>
                <div className='image-wrapper-l  mx-auto shadow-md rounded-sm'>
                        <img className='image  overflow-hidden ' src={landing3} alt="" />
                        <div className="middle">
                            <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' target='blank' href="https://mynft-landing-page.vercel.app/">view site</a>
                            <BiLinkExternal></BiLinkExternal>
                            </div>
                        </div>
                    <div className='overley absolute '></div>
                </div>
                <div className=' w-2/3 mx-auto'>
                    <p className='text-white font-popins text-center py-1 mt-2 text-g '>NFT Landing Page</p>
                </div>
               </div>
               {/* Landing page 4 */}

               <div className='container relative mt-10 md:mt-0'>
                <div className='image-wrapper-l mx-auto shadow-md rounded-sm'>
                        <img className='image  overflow-hidden ' src={booking} alt="" />
                        <div className="middle">
                            <div className="text flex items-center justify-center gap-1 font-roboto font-light">
                            <a className='text-sm' target='blank' href="https://booking-app-clone.web.app/">view site</a>
                            <BiLinkExternal></BiLinkExternal>
                            </div>
                        </div>
                    <div className='overley absolute '></div>
                </div>
                <div className=' w-2/3 mx-auto'>
                    <p className='text-white font-popins text-center py-1 mt-2 text-g '>Booking.com Home page</p>
                </div>
               </div>

          

            </div>
    );
};

export default LandingPage;