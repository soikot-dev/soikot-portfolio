import React, { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';  // Import the arrow icon

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  const allProjects = [
    { id: 1, category: 'Branding', title: 'Mobile Application Design', image: '/images/project1.jpg', link: '/project1' },
    { id: 2, category: 'Design', title: 'Website Makeup Design', image: '/images/project2.jpg', link: '/project2' },
    { id: 3, category: 'Graphics', title: 'Brand Identity and Motion Design', image: '/images/project3.jpg', link: '/project3' },
    { id: 4, category: 'Game', title: 'Mobile Application Design', image: '/images/project4.jpg', link: '/project4' },
    { id: 5, category: 'Branding', title: 'Application Design', image: '/images/project1.jpg', link: '/project5' },
    { id: 6, category: 'Design', title: 'Website Development', image: '/images/project2.jpg', link: '/project6' },
  ];

  const filteredProjects =
    selectedCategory === 'Show All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="container mx-auto text-white p-6 sm:p-8 mt-8 rounded-xl">
      <h3 className="text-5xl font-semibold mb-4">Works & Projects</h3>
      <p className="mb-6 text-xl">Check out some of my design projects, meticulously crafted with love and dedication.</p>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center lg:justify-start">
        {['Show All', 'Design', 'Branding', 'Graphics', 'Game'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-white border-b-2 ${selectedCategory === category ? 'border-red-500 text-red-500' : 'border-transparent text-gray-400'} transition-colors duration-300`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative border border-gray-700 p-6 rounded-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Modern Overlay Button */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 rounded-lg">
              <a
                href={project.link}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
              >
                <FaArrowAltCircleUp className="text-xl" />
                <span>View Project</span>
              </a>
            </div>

            <h4 className="text-lg font-semibold mt-4">{project.title}</h4>
            <p className="text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
