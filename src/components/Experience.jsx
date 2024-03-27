import React from 'react';
import HTMLImage from "./assets/HTML.png";
import cssImage from "./assets/css.png";
import javascriptImage from "./assets/javascript-logo.png";
import mysqlImage from "./assets/mysql.png";
import gitlabImage from "./assets/gitlab.jpeg";

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: HTMLImage,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: cssImage,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascriptImage,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: mysqlImage,
      title: 'MySQL',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: gitlabImage,
      title: 'GitLab',
      style: 'shadow-orange-500'
    },
  ];

  return (
    <div id='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
