import React from 'react';
import { FaGithub, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const Profile = () => {
  return (
    <div className="flex flex-col items-center bg-greyBg text-white p-8 rounded-xl shadow-lg w-full h-full sm:max-w-sm hover:shadow-2xl transition-shadow duration-300 ">
      <div className="bg-orange-500 rounded-full p-4 mt-20">
        <img src="/images/profile.png" alt="Bentos Walker" className="rounded-full w-350 h-350" />
      </div>
      <h2 className="text-4xl font-bold mt-6 text-center">Saikat Karmoker</h2>
      <p className="text-lg text-gray-400 mt-2 text-center mt-6">I am a Web Designer based in Dhaka Bangladesh.</p>
      <div className="mt-6 flex space-x-6">
        
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-500 hover:text-red-500 transition duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaXTwitter className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        
      </div>
    </div>
  );
};

export default Profile;
