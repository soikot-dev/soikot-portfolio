import React from 'react';
import { FaGraduationCap, FaSchool, FaBookReader } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-12 md:p-16 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">Education</h3>
      <div className="space-y-8">
        {/* Education Item 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center border-b border-gray-600 pb-6 text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2013 - 2015</p>
            <p className="text-gray-400 text-md sm:text-lg">Bachelor Degree of Information Technology</p>
            <p className="text-sm sm:text-md">State University Bangladesh</p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center border-b border-gray-600 pb-6 text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaSchool className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2021 - 2024</p>
            <p className="text-gray-400 text-md sm:text-lg">Higher Secondary Education</p>
            <p className="text-sm sm:text-md">Premium College United VC</p>
          </div>
        </div>

        {/* Education Item 3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaBookReader className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2021 - 2024</p>
            <p className="text-gray-400 text-md sm:text-lg">UI/UX Design</p>
            <p className="text-sm sm:text-md">Webster College</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
