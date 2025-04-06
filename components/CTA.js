import React from 'react';

const CTA = () => {
  return (
    <section className="bg-greyBg text-white p-6 sm:p-8 lg:p-20 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-10 sm:mt-20">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold p-5 mb-4">
        Are You Ready to kickstart your project <br /> with a touch of magic?
      </h3>
      <p className="text-base sm:text-lg mb-6 p-5 text-gray-300">
        Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push
        <br /> the boundaries of design and deliver exceptional work.
      </p>

      
      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
        Let's Talk
      </button>
    </section>
  );
};

export default CTA;
