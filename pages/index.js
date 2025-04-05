import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Hero from '../components/Hero';
import CompanyWorkedWith from '../components/CompanyWorkedWith';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div id="home" className="bg-bodyBg-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 md:max-w-sm w-full">
            <Profile />
          </div>
          <div className="flex-1 flex flex-col gap-8 w-full">
            <Hero />
            <CompanyWorkedWith />
          </div>
        </div>
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
