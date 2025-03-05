import React from "react";
import { assets } from "../assets/assets"

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-medium mb-2">About <span className="text-blue-500 underline underline-offset-6 decoration-1 font-light">
        Our Website</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Our website is a platform that allows users to search and sell the property they are looking for.</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={ assets.brand_img } className="w-full sm:w-1/2 max-w-lg" alt=""/>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-500">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-600">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-600">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-600">18+</p>
              <p>Mn.Sq.Ft.Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-600">26+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="text-base mt-10 max-w-lg text-justify">
            Our website is an innovative platform designed to make it easier for users 
            to search and sell different types of properties according to their needs. 
            With its intuitive interface and advanced search features, users can easily find 
            their dream property based on location, price, and other criteria. In addition, 
            we also provide services for property owners who want to sell or rent their assets with a wider reach. 
            We are committed to creating an efficient, safe and convenient property search experience for all users.
          </p>
          <div className="mt-5">
            <button className="border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-2 rounded duration-75 ease-in cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
