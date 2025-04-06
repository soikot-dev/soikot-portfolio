import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';  // Projects component (Reusable)
import CTA from '../components/CTA';           // Reusable CTA component
import Footer from '../components/Footer';     // Reusable Footer component

const WorksPage = () => {
  return (
    <div className="bg-bodyBg text-white">
      {/* Header Section */}
      <Header />

      {/* Works & Projects Section */}
      <div className="container mx-auto p-6 sm:p-10">

        {/* Projects Section */}
        <Projects />

        {/* Call-to-Action Section (Improved) */}
        <div className="mt-20"> 
          <CTA />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default WorksPage;
