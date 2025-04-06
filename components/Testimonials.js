import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const Testimonials = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // Force single column for mobile
      },
    ],
  };

  return (
    <section className="text-white p-6 sm:p-10 rounded-xl shadow-lg mb-8 relative">
      <h3 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">What clients say!</h3>
      <Slider ref={sliderRef} {...settings} className="flex">
        
        {/* Testimonial 1 */}
        <div className="p-2 sm:p-4">
          <div className="border border-gray-600 p-4 sm:p-6 rounded-xl shadow-lg text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src="/images/client1.jpg" alt="Client 1" className="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  "Financial planners help people understand how to invest and save money efficiently."
                </p>
                <p className="font-semibold">Zanathon Doe</p>
                <p className="text-gray-500">CEO & Founder X</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="p-2 sm:p-4">
          <div className="border border-gray-600 p-4 sm:p-6 rounded-xl shadow-lg text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src="/images/client2.jpg" alt="Client 2" className="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                "Financial planners help people understand how to invest and save money efficiently."
                </p>
                <p className="font-semibold">Liana Marie</p>
                <p className="text-gray-500">Lead Designer Meta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="p-2 sm:p-4">
          <div className="border border-gray-600 p-4 sm:p-6 rounded-xl shadow-lg text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src="/images/client3.jpg" alt="Client 3" className="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                "Financial planners help people understand how to invest and save money efficiently."
                </p>
                <p className="font-semibold">Emily Davis</p>
                <p className="text-gray-500">CFO & Founder Z</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="p-2 sm:p-4">
          <div className="border border-gray-600 p-4 sm:p-6 rounded-xl shadow-lg text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img src="/images/client4.jpg" alt="Client 4" className="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4" />
              <div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                "Financial planners help people understand how to invest and save money efficiently."
                </p>
                <p className="font-semibold">James Brown</p>
                <p className="text-gray-500">Founder & CEO A</p>
              </div>
            </div>
          </div>
        </div>

      </Slider>

      {/* Custom Arrows */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className="p-3 rounded-full bg-red-700 hover:bg-gray-600 transition"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          className="p-3 rounded-full bg-red-700 hover:bg-gray-600 transition"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
