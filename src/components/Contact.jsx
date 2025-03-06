import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2ab10b85-9fb6-47fd-98e5-c5d1ef272fc0");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("");
          toast.success("Form Submitted Success")
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.message)
          setResult("");
        }
    };

  return (
    <motion.div 
      initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      id='Contact' className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-medium mb-2 text-center'>
            Contact <span className='text-blue-500 underline underline-offset-6 decoration-1 font-light'>With Us</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            We're here to help you find your dream home. Please feel free to contact us for more information or free consultation.
        </p>

        <form onSubmit={ onSubmit } className='max-w-2xl mx-auto text-gray-500 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                    type='text' name='Name' placeholder='Your Name' required></input>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
                    type='email' name='Email' placeholder='Your Email' required></input>
                </div>
            </div>
            <div className='text-left my-6'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                name='Message' placeholder='Your Message'></textarea>
            </div>
            <button className='hover:bg-blue-500 hover:text-white border hover:border-none duration-75 ease-in px-6 py-4 mb-10 rounded cursor-pointer'>
                { result ? result : 'Send Message' }
            </button>
        </form>
    </motion.div>
  )
}

export default Contact