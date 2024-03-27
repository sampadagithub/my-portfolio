import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(prevNav => !prevNav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const links = [
    { id: 1, link: 'Home', to: 'home' },
    { id: 2, link: 'About', to: 'about' },
    // { id: 3, link: 'Portfolio', to: 'portfolio' },
    { id: 4, link: 'Experience', to: 'experience' },
    { id: 5, link: 'Contact', to: 'contact' },
  ];

  return (
    <div className="fixed w-full h-20 px-4 flex justify-between items-center text-white bg-black">
      <h1 className="text-5xl font-signature ml-2">sampada</h1>
      
      <ul className="hidden md:flex">
        {links.map(({ id, link, to }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium
           text-gray-500 hover:scale-105 duration-200"
           >
            <Link onClick={closeNav} to={to} smooth duration={600}>{link}</Link>
          </li>
        ))}
      </ul>
      
      <div onClick={toggleNav} className="cursor-pointer pr-4 text-gray-500 md:hidden">
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 flex flex-col justify-center items-center">
          {links.map(({ id, link, to }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={closeNav} to={to} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
