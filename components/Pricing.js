import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-20 mt-10 sm:mt-20 rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Flexible Pricing Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Basic Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-lg mb-4">Have design ready to build?</p>
            <p className="text-2xl font-bold mb-6">$15/Hour</p>
            
            <ul className="mb-6 space-y-2">
              {[
                'Need your wireframe',
                'Design with Figma, Framer',
                'Product Design',
                'Digital Marketing',
                'Custom Support',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-200">
                  <FaArrowRight className="text-red-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-red-500 text-white border-2 border-transparent px-5 sm:px-6 py-3 mt-6 rounded-lg hover:bg-transparent hover:border-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto flex items-center justify-center">
              Order Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-lg mb-4">Don’t have any design? Leave it to me</p>
            <p className="text-2xl font-bold mb-6">$59/Hour</p>
            <ul className="mb-6 space-y-2">
              {[
                'Website Design',
                'Mobile Apps Design',
                'Product Design',
                'Digital Marketing',
                'Custom Support',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-200">
                  <FaArrowRight className="text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-red-500 text-white border-2 border-transparent px-5 sm:px-6 py-3 mt-6 rounded-lg hover:bg-transparent hover:border-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto flex items-center justify-center">
              Order Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-lg mb-4">Complete end-to-end solutions</p>
            <p className="text-2xl font-bold mb-6">$99/Hour</p>
            <ul className="mb-6 space-y-2">
              {[
                'Website & App Development',
                'UI/UX Consultation',
                'Brand Strategy',
                'SEO & Marketing',
                '24/7 Priority Support',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-200">
                  <FaArrowRight className="text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-red-500 text-white border-2 border-transparent px-5 sm:px-6 py-3 mt-6 rounded-lg hover:bg-transparent hover:border-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto flex items-center justify-center">
              Order Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
