import React from 'react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        <p className="text-gray-700 dark:text-gray-300 mb-12">
        Halima is an innovative and result-driven Computer Science graduate seeking Junior Web Developer 
        position to utilize her coding skills in the creation of meaningful software applications.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
        
        {[
          {
            title: "Junior Web Developer",
            company: "HaqqPay",
            location: "Lagos",
            period: "July 2023 - Oct 2023",
            type: "Contract gig"
          },
          {
            title: "Social Media Evaluator",
            company: "Uolo by Appen",
            location: "Remote",
            period: "4 Jan 2021 - 19 Mar 2022",
            type: "Full Time"
          },
          {
            title: "Data Miner",
            company: "BudgIT",
            location: "Abuja",
            period: "18 Aug 2019 - 14 Jun 2020",
            type: "Internship"
          }
        ].map((job, index) => (
          <div key={index} className="mb-6 flex items-center">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{job.company} • {job.location}</p>
            </div>
            <div className="text-right"><span className="inline-block bg-green-200 text-green-500 dark:bg-green-300 dark:text-green-500 text-xs px-2 py-1 rounded-full">
                {job.type}
              </span>
              <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Education</h2>
        
        <div className="mb-6 flex items-center">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">B.Sc Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400">Federal University of Agriculture, Abeokuta (FUNAAB)</p>
          </div>
          <div className="text-right">
          <span className="inline-block bg-green-200 text-green-500 dark:bg-green-300 dark:text-green-500 text-xs px-2 py-1 rounded-full">
              Full Time
            </span>
            <p className="text-gray-600 dark:text-gray-400">21 Nov 2015 - 14 May 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
