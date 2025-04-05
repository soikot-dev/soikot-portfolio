import React from 'react';
import { FaBriefcase, FaCogs, FaCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-12 md:p-16 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">Experience</h3>
      <div className="space-y-8">
        {/* Experience Item 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center border-b border-gray-600 pb-6 text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaBriefcase className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2021 - Present</p>
            <p className="text-gray-400 text-md sm:text-lg">Web Designer</p>
            <p className="text-sm sm:text-md">Themeforest Market</p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center border-b border-gray-600 pb-6 text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaCogs className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2021 - 2023</p>
            <p className="text-gray-400 text-md sm:text-lg">Web Development</p>
            <p className="text-sm sm:text-md">Envato Theme Developer</p>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left">
          <div className="bg-orange-500 p-4 rounded-full mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
            <FaCode className="text-white text-2xl" />
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl">2020 - 2022</p>
            <p className="text-gray-400 text-md sm:text-lg">Web Developer & Business Partner</p>
            <p className="text-sm sm:text-md">Marketing Expert GRP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
