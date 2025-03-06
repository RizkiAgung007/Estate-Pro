import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollTop = () => {

    const [toUpVisible, setToUpVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setToUpVisible(true)
            } else {
                setToUpVisible(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
  return (
    <div>
        <button onClick={ scrollTop } className={`fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-3 
        shadow-lg transition-opacity cursor-pointer ${toUpVisible ? "opacity-100" : "opacity-0"}`}>
            <FaArrowUp size={20}/>
        </button>
    </div>
  )
}

export default ScrollTop