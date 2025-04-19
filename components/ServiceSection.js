import React from 'react';
import { FaPalette, FaGlobe, FaMobileAlt } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-20 mt-20 rounded-xl">
      <div className="container mx-auto text-center sm:text-start">
        <h2 className="text-4xl font-semibold mb-10">Quality Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border border-gray-600 p-6 sm:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-6">
              <FaPalette className="text-orange-500 text-5xl mx-auto sm:mx-0" />
            </div>
            <h3 className="text-2xl font-semibold text-left mb-3">Brand Identity Design</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-left">
              Bentos gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>

          {/* Service 2 */}
          <div className="border border-gray-600 p-6 sm:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-6">
              <FaGlobe className="text-orange-500 text-5xl mx-auto sm:mx-0" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Website Design</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-left">
              Bentos gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="border border-gray-600 p-6 sm:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-6">
              <FaMobileAlt className="text-orange-500 text-5xl mx-auto sm:mx-0" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Application Design</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-left">
              Bentos gives you the blocks & kits you need to create a true website within minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
