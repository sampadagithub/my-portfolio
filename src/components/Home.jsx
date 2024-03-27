import React from 'react';
// import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-slate-600 to-gray-800 via-black">
      <div className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" >
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I am a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience in Ank IT Solutions as a Trainee. Currently, I love to work on web applications using technologies like HTML, CSS, JS, React, Tailwind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
