import React from 'react';

const CompanyWorkedWith = () => {
  return (
    <section className="bg-greyBg text-white p-10 sm:p-20 rounded-xl shadow-lg w-full">
      <h3 className="text-3xl font-semibold mb-4 text-center sm:text-left">Companies I Worked With</h3>

      {/* Add a wrapper div to control the overflow */}
      <div className="overflow-hidden relative mt-6 sm:mt-10 w-full flex justify-center sm:justify-start">
        {/* Flex container for the logos */}
        <div className="company-logos flex flex-wrap justify-center sm:justify-start gap-6">
          {/* Logos to scroll */}
          <img
            src="/logos/google.svg"
            alt="Google"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/slack.svg"
            alt="Slack"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/amazon.svg"
            alt="Amazon"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/walmart.svg"
            alt="Walmart"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/linkedin.svg"
            alt="LinkedIn"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          {/* Duplicate the logos for seamless effect */}
          <img
            src="/logos/google.svg"
            alt="Google"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/slack.svg"
            alt="Slack"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/amazon.svg"
            alt="Amazon"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/walmart.svg"
            alt="Walmart"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
          <img
            src="/logos/linkedin.svg"
            alt="LinkedIn"
            className="w-12 sm:w-16 h-12 sm:h-16 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyWorkedWith;
