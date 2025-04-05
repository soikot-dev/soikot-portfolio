import React, { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';  // Import the arrow icon

const Projects = () => {
  // State to handle the selected category
  const [selectedCategory, setSelectedCategory] = useState('Show All');

  // Projects data
  const allProjects = [
    { id: 1, category: 'Branding', title: 'Mobile Application Design', image: '/images/project1.jpg', link: '/project1' },
    { id: 2, category: 'Design', title: 'Website Makeup Design', image: '/images/project2.jpg', link: '/project2' },
    { id: 3, category: 'Graphics', title: 'Brand Identity and Motion Design', image: '/images/project3.jpg', link: '/project3' },
    { id: 4, category: 'Game', title: 'Mobile Application Design', image: '/images/project4.jpg', link: '/project4' },
    { id: 5, category: 'Branding', title: 'Application Design', image: '/images/project5.jpg', link: '/project5' },
    { id: 6, category: 'Design', title: 'Website Development', image: '/images/project6.jpg', link: '/project6' },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'Show All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-greyBg text-white p-6 sm:p-8 lg:p-20 mt-10 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Works & Projects</h3>
      <p className="mb-6">Check out some of my design projects, meticulously crafted with love and dedication.</p>

      {/* Category Tabs (Center on Mobile, Left on Larger Screens) */}
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
          <div key={project.id} className="relative bg-gray-800 p-6 rounded-lg group">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            {/* Overlay Button */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <a
                href={project.link}
                className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                <FaArrowAltCircleUp className="text-xl" />
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
