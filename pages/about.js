import React from 'react';
import Header from '../components/Header'; 
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-bodyBg text-white">
      {/* Header Section */}
      <Header />

      <div id="about" className="container mx-auto px-6 sm:px-8 lg:px-16 py-10">
        {/* Profile and About Details Section */}
<div className="flex flex-col md:flex-row gap-8 mb-20 items-stretch">
  {/* Profile Section */}
  <div className="w-full sm:w-auto flex justify-center md:block">
    <Profile />
  </div>

  {/* About Details Section */}
  <div className="md:ml-8 bg-greyBg text-white p-6 sm:p-10 lg:p-12 rounded-xl shadow-lg text-center sm:text-left flex-1 flex flex-col justify-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 leading-tight">
      I’m Bentos Walker, a Product Designer.
    </h2>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4 sm:mt-6">
      I’m a product designer based in San Francisco, specializing in web design, illustration, and visual development. I focus on blending **creativity with functionality** to build user-friendly designs.
    </p>
    <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-3 sm:mt-4">
      My design approach is rooted in **user-centered principles**, aiming to create seamless and visually engaging experiences. From concept to execution, I ensure every design tells a story.
    </p>
    <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-3 sm:mt-4">
      Beyond design, I’m passionate about the **history of typography and UI patterns**. Did you know the placeholder text "Lorem Ipsum" actually dates back over **2,000 years** to a work by Cicero?
    </p>
    <div className="flex justify-center sm:justify-start">
  <button className="bg-red-500 text-white px-6 py-3 mt-6 sm:mt-8 rounded-lg hover:bg-orange-600 
                     transition-all duration-300">
    Get In Touch
  </button>
</div>


  </div>
</div>


        {/* Experience and Education Section */}
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <div className="flex-1">
            <Experience />
          </div>
          <div className="flex-1">
            <Education />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* Call-to-Action Section */}
        <div className="mb-16">
          <CTA />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
