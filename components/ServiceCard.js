import React from 'react';

const ServiceCard = ({ title, description, price, features, buttonText }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-xl font-bold mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400">{feature}</li>
        ))}
      </ul>
      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
