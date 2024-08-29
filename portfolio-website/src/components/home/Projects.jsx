import React from 'react'
import project1 from '../../assets/images/work-1.jpg'
import project2 from '../../assets/images/work-2.jpg'
import project3 from '../../assets/images/work-3.jpg'
import project4 from '../../assets/images/work-4.jpg'
import project5 from '../../assets/images/work-5.jpg'
import project6 from '../../assets/images/work-1.jpg'

const Projects = () => {
  const projects = [
    { title: "Huddle", image: project1, livePreview: "https://adelajahalima.github.io/HUDDLE/", code: "https://github.com/adelajahalima/HUDDLE" },
    { title: "Social Media Dashboard", image: project2, livePreview: "https://social-media-dashboard-m9oi.vercel.app/", code: "https://github.com/adelajahalima/social_media_dashboard" },
    { title: "Contact Form", image: project3, livePreview: "" },
    { title: "Keeper App", image: project4 },
    { title: "Something Something", image: project5 },
    { title: "Something Something", image: project6 },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-8 lg:px-28">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-white mb-2">Projects</h2>
    <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">Things I've built so far</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-blue-950 dark:text-white">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Tech stack : HTML, JavaScript, SASS, React
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a href={project.livePreview} className="text-gray-600 dark:text-gray-400 underline hover:no-underline hover:text-blue-950 flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                Live Preview
              </a>
              <a href={project.code} className="text-gray-600 dark:text-gray-400 underline hover:no-underline hover:text-blue-950 flex items-center justify-center sm:justify-start">
                <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" clipRule="evenodd"/></svg>
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
