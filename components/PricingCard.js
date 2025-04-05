import React from 'react';

const PricingCard = ({ title, description, price, features, buttonText }) => {
  return (
    <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-300 mb-4">{description}</p>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            ✅ <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
