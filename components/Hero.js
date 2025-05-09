import React from "react";
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-greyBg text-white p-6 sm:p-10 text-center sm:text-left rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-5xl mx-auto flex flex-col items-center sm:items-start">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug p-4 sm:p-5">
        <span className="text-sm sm:text-lg font-small text-gray-400 block mb-2">
          Hello there,
        </span>
        I’m Saikat Karmoker, a Front-End Web Developer crafting user-centric
        design with pixel-perfect website.
      </h2>
      <p className="mt-2 text-sm sm:text-lg px-4 sm:px-5 flex items-center space-x-2">
        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        <span>Available for Freelancing</span>
      </p>

      <div className="p-4 sm:p-5 flex justify-center sm:justify-start w-full">
          <a href="/files/my-resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-red-500 text-white border-2 border-transparent px-5 sm:px-6 py-3 mt-6 rounded-lg hover:bg-transparent hover:border-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto flex items-center justify-center">
              Download CV
              <FiDownload className="ml-2 h-5 w-5" />
            </button>
          </a>
      </div>


    </section>
  );
};

export default Hero;
