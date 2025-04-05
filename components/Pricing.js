import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-20 mt-10 sm:mt-20 rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Flexible Pricing Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Basic Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-lg mb-4">Have design ready to build? Or small budget</p>
            <p className="text-2xl font-bold mb-6">$15/Hour</p>
            <ul className="mb-6 space-y-2">
              <li>Need your wireframe</li>
              <li>Design with Figma, Framer</li>
              <li>Product Design</li>
              <li>Digital Marketing</li>
              <li>Custom Support</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all">
              Order Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-lg mb-4">Don’t have any design? Leave it to me</p>
            <p className="text-2xl font-bold mb-6">$59/Hour</p>
            <ul className="mb-6 space-y-2">
              <li>Website Design</li>
              <li>Mobile Apps Design</li>
              <li>Product Design</li>
              <li>Digital Marketing</li>
              <li>Custom Support</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all">
              Order Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-600 p-6 sm:p-8 rounded-xl shadow-xl text-left">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-lg mb-4">Complete end-to-end solutions</p>
            <p className="text-2xl font-bold mb-6">$99/Hour</p>
            <ul className="mb-6 space-y-2">
              <li>Website & App Development</li>
              <li>UI/UX Consultation</li>
              <li>Brand Strategy</li>
              <li>SEO & Marketing</li>
              <li>24/7 Priority Support</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all">
              Order Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
