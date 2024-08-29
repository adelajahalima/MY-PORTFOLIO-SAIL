import React from 'react'
import html5Icon from '../../assets/images/info-html.svg';
import css3Icon from '../../assets/images/info-css.svg';
import jsIcon from '../../assets/images/info-javascript.svg';
import reactIcon from '../../assets/images/info-react.svg';
import vscodeIcon from '../../assets/images/vscode.png';
import mongodbIcon from '../../assets/images/mongodb.png';
import tailwindIcon from '../../assets/images/info-tailwind-css.svg';
import nodeIcon from '../../assets/images/nodejs-icon-logo.svg';
import gitIcon from '../../assets/images/info-git.svg';
import figmaIcon from '../../assets/images/info-figma.svg';
import githubIcon from '../../assets/images/info-github.svg';
import chatgptIcon from '../../assets/images/chatgpt-6.svg';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon:  css3Icon},
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Mongodb', icon: mongodbIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'chatgptIcon', icon: chatgptIcon},
    { name: 'Git', icon: gitIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'VS Code', icon: vscodeIcon},
    { name: 'GitHub', icon: githubIcon},
    { name: 'Nodejs', icon: nodeIcon },
  ];

  return (
    <section id="techstack" className="bg-white dark:bg-gray-900 text-blue-950 dark:text-white py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">My Tech Stack</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Technologies I've been working with recently
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-8 justify-items-center">
          {technologies.map((tech) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 filter dark:invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;