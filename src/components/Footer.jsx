import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className='w-full pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 overflow-hidden'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-4'>
                <img src={ assets.logo_dark } alt='' className='mb-4'/>
                <p className='text-white'>
                Realizing a dream home is not only about owning a home, but also about creating 
                comfort and quality life. We offer the best selection of properties with strategic locations, 
                modern designs, and complete facilities. Find a home that fits your lifestyle today!.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-4'>
                <h3 className='text-white text-lg font-semibold'>
                    Company Name
                </h3>
                <ul className='flex flex-col gap-y-2 pt-4'>
                    <a href='#Header' className='text-white hover:underline hover:underline-offset-6 decoration-1'>Home</a>
                    <a href='#Abour' className='text-white hover:underline hover:underline-offset-6 decoration-1'>About Us</a>
                    <a href='#Contact' className='text-white hover:underline hover:underline-offset-6 decoration-1'>Contact</a>
                    <a href='#' className='text-white hover:underline hover:underline-offset-6 decoration-1'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-4'>
                <h3 className='text-white text-lg font-semibold'>Contact Information</h3>
                <p className='text-white pt-4'>
                The latest news, articles, information, and resources, sent to your inbox weekly.
                </p>
                <div className='pt-3 flex'>
                    <input 
                    type='email' name='Email' placeholder='Enter Your Email'
                    className='p-2 rounded-r-none rounded bg-gray-400 text-gray-800 focus:outline-none w-full md:w-auto'
                    ></input>
                    <button className='py-2 px-4 rounded-r-lg bg-blue-500 text-white'>
                        Send Mail
                    </button>
                </div>
            </div>
        </div>
        <div>
            <p className='text-white text-center py-4 my-6 border-t'>
                &copy; 2025 Estate Pro. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer