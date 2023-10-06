import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 text-gray-100 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white flex">
        <img src="./logo.png" alt="logo" className='w-10 h-10'/>
        <h5 className='ml-4 text-gray-100'>ქრისტიანული ფილმები</h5>
      </Link>
      <button
        className="lg:hidden block text-2xl"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`lg:flex flex-col lg:flex-row lg:space-x-4 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="/" className="text-white hover:text-gray-300">
          მთავარი
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          ფილმები
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          კონტაქტი
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
