import React from 'react';

const logos = [
  '/logos/google.png',
  '/logos/slack.png',
  '/logos/amazon.png',
  '/logos/walmart.png',
  '/logos/linkedine.png',
];

const CompanyWorkedWith = () => {
  return (
    <section className="bg-greyBg text-white p-6 sm:p-20 rounded-xl shadow-lg w-full">
      <h3 className="text-3xl font-semibold mb-4 text-center sm:text-left">
        Companies I Worked With
      </h3>

      {/* Marquee container */}
      <div className="overflow-hidden w-full mt-6 sm:mt-10">
        <div className="marquee-track flex">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index}`}
              className="w-20 sm:w-16 h-12 sm:h-16 mx-6 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyWorkedWith;
