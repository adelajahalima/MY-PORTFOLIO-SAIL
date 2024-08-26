import React from 'react'
import project1 from '../../assets/images/work-1.jpg'
import project2 from '../../assets/images/work-2.jpg'
import project3 from '../../assets/images/work-3.jpg'
import project4 from '../../assets/images/work-4.jpg'
import project5 from '../../assets/images/work-5.jpg'
import project6 from '../../assets/images/work-1.jpg'

const Projects = () => {
  const projects = [
    { title: "Huddle", image: project1 },
    { title: "Social Media Dashboard", image: project2 },
    { title: "Contact Form", image: project3 },
    { title: "Keeper App", image: project4 },
    { title: "Something Something", image: project5 },
    { title: "Something Something", image: project6 },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-20 sm:px-24 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Projects</h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">Things I've built so far</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    Live Preview
                  </a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
