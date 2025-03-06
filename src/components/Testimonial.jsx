import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react' 

const Testimonial = () => {
  return (
    <motion.div 
        initial={{opacity: 0, y: 200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once:true}}
        id='Testimonial' className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-medium mb-2 text-center'>
            Customer <span className='text-blue-500 underline underline-offset-6 decoration-1 font-light'>Testimonial</span>    
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those who found home with us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            { testimonialsData.map((testimon, index) =>(
                <motion.div 
                    key={ index } 
                    initial={{opacity: 0, y: 200}}
                    transition={{duration: 1.5, delay: index * 0.3}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once:true}}
                    className='max-w-[340px] border border-gray-300 shadow-lg rounded px-8 py-12 text-center'>
                    <img src={ testimon.image } alt={ testimon.alt } className='w-20 h-20 rounded-full mx-auto mb-4' />
                    <h2 className='text-xl text-blue-500 font-medium'>{ testimon.name }</h2>
                    <p className='text-sm text-gray-500 mb-4'>{ testimon.title }</p>
                    <div className='flex gap-1 justify-center text-red-500 mb-4'>
                        { Array.from({ length: testimon.rating }, (index) => (
                            <img key={index} src={ assets.star_icon } alt='' />
                        ))}
                    </div>
                    <p className='text-gray-600'>{ testimon.text }</p>
                </motion.div>
            )) }
        </div>
    </motion.div>
  )
}

export default Testimonial