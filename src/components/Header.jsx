import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='min-h-screen w-full mb-4 bg-cover bg-center flex items-center overflow-hidden' 
    style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar />
        <motion.div 
        initial ={{opacity: 0, y:200}}
        transition={{duration: 1.5}}
        animate={{opacity: 1, y: 0}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-3xl sm:text-5xl inline-block max-w-3xl font-semibold pt-20'>Welcome to our Website, Explore homes that fit your dreams</h2>
            <p className='pt-2 md:text-xl sm:text-2xl inline-block text-base'>Discover our selection of luxurious homes, each designed with a personal touch</p>
            <div className="space-x-6 mt-18">
                <a href="#Project" 
                className="border border-white hover:border-transparent bg-transparent px-8 py-3 rounded ease-in duration-50 hover:bg-blue-400">
                    Project
                </a>
                <a href="#Contact" 
                className="border border-white hover:border-transparent bg-transparent px-8 py-3 rounded ease-in duration-50 hover:bg-gray-400">
                    Contact
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header