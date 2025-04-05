import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import CTA from '../components/CTA';  // Reusable CTA
import Footer from '../components/Footer';  // Reusable Footer

const ContactPage = () => {
  return (
    <div className="bg-bodyBg text-white">
      {/* Header Section */}
      <Header />

      {/* Contact Information and Form Section */}
      <div className="container mx-auto p-6 sm:p-10">
        <h2 className="text-5xl font-semibold text-center mb-8">Get in Touch with Me!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Section (Left Side) */}
          <div className="bg-greyBg p-10 rounded-lg shadow-lg">
            <div className="mb-6">
              <div className="mb-2">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
              </div>
              <p className="text-xl font-semibold">Our Office:</p>
              <p className="text-gray-500 text-xl">Jurain, Dhaka, Bangladesh</p>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <FaPhoneAlt className="text-red-500 text-2xl" />
              </div>
              <p className="text-xl font-semibold">Contact Number:</p>
              <p className="text-gray-500 text-xl">+1234321321</p>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <FaEnvelope className="text-red-500 text-2xl" />
              </div>
              <p className="text-xl font-semibold">Email Us:</p>
              <p className="text-gray-500 text-xl">websitename@mail.com</p>
            </div>
          </div>

          {/* Contact Form Section (Right Side) */}
          <div className="bg-greyBg p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 text-black focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 text-black focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 text-black focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto"
                >
                  Send Me Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <CTA />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
