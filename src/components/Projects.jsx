import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'
import { delay } from 'motion';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cartShow, setCardShow] = useState(1);

    // Menggunakan useEffect untuk menyesuaikan jumlah kartu yang ditampilkan berdasarkan ukuran layar
    useEffect(() => {
        const updateCartShow = () => {
            if (window.innerWidth >= 1024) {
                setCardShow(projectsData.length);
            } else {
                setCardShow(1);
            }
        };
        updateCartShow();
        
        // Tambah dan hapus event listener untuk menangani perubahan ukuran layar
        window.addEventListener('resize', updateCartShow);
        return () => window.removeEventListener('resize', updateCartShow);
    }, []);

    const nextIndex = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % projectsData.length // Jika sudah di indeks terakhir, kembali ke awal
        );
    };

    const prevIndex = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1 // Jika di indeks pertama, kembali ke indeks terakhir
        );
    };


  return (
    <motion.div 
        initial={{opacity: 0, x: 200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        id='Project' className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-medium mb-2 text-center'>Projects <span className="text-blue-500 underline underline-offset-6 decoration-1 font-light">Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Building Legacies-Explore Our Portofolio</p>

        {/* Slider Button */}
        <div className='flex justify-end items-center mb-8'>
            <button onClick={ prevIndex } className='p-3 bg-gray-300 rounded mr-2 cursor-pointer'>
                <img src={ assets.left_arrow } alt='Prev' />
            </button>
            <button onClick={ nextIndex } className='p-3 bg-gray-300 rounded mr-2 cursor-pointer'>
                <img src={ assets.right_arrow } alt='Prev' />
            </button>
        </div>

        {/* Project slider */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-200 ease-in-out'
            style={{transform: `translateX(-${(currentIndex * 100) / cartShow}%)`}}>
                {projectsData.map((project, index) => (
                    <motion.div 
                        key={ index } 
                        initial={{opacity: 0, x: 200}}
                        transition={{duration: 1.5, delay: index * 0.3}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={ project.image } alt={ project.title } className='w-full h-auto mb-14' />
                        <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-500'>
                                    { project.title }
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    { project.price} <span className='px-2'> | </span> { project.location }
                                </p>
                            </div>
                        </div>    
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Projects