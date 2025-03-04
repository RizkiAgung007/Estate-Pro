import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(()=> {
        if(showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return ()=> {
            document.body.style.overflow = 'auto'
        };
    },[ showMenu ])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container flex mx-auto justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={ assets.logo } alt='' />
            <ul className='hidden md:flex gap-10'>
                <a href='#Header' className='cursor-pointer hover:text-gray-400 text-white duration-50 ease-in'>Home</a>
                <a href='#About' className='cursor-pointer hover:text-gray-400 text-white duration-50 ease-in'>About</a>
                <a href='#Project' className='cursor-pointer hover:text-gray-400 text-white duration-50 ease-in'>Project</a>
                <a href='#Testimonial' className='cursor-pointer hover:text-gray-400 text-white duration-50 ease-in'>Testimonial</a>
                <a href='#Contact' className='cursor-pointer hover:text-gray-400 text-white duration-50 ease-in'>Contact</a>
            </ul>
            <button className='cursor-pointer text-white md:block hidden px-8 py-2 rounded-full bg-gray-700'>Sign Up</button>
            <img src={ assets.menu_icon } onClick={toggleMenu} className='md:hidden w-7 cursor-pointer' alt='menu' />
        </div>
        {/* --- Mobile Menu --- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-8 cursor-pointer'>
                <img src={assets.cross_icon} onClick={toggleMenu} className='w-6' alt='' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={ toggleMenu } href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={ toggleMenu } href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={ toggleMenu } href='#Project' className='px-4 py-2 rounded-full inline-block'>Project</a>
                <a onClick={ toggleMenu } href='#Testimonial' className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
                <a onClick={ toggleMenu } href='#Contact' className='px-4 py-2 rounded-full inline-block'>Contact</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar