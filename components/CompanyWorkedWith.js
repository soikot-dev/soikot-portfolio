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
        <div className="marquee-wrapper">
          <div className="marquee-track flex">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 h-20 sm:h-16"
                style={{ width: 'calc(20% - 1rem)' }} // Show 4 logos at once
              >
                <img
                  src={logo}
                  alt={`Logo of company ${index + 1}`}
                  className="w-full h-full object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyWorkedWith;
