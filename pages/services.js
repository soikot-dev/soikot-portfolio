import React from 'react';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ServicePage = () => {
  return (
    <div id='services' className="bg-bodyBg text-white">
      <Header />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'> {/* Added padding for better mobile spacing */}
          
          {/* Service Section */}
          <div className="my-6 sm:my-10">
            <ServiceSection />
          </div>

          {/* Pricing Section */}
          <div className="my-6 sm:my-10">
            <Pricing />
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

export default ServicePage;
