import React from 'react';

const Header = ({ setShowCalendly }) => {
  return (
    <header id="header" className="bg-white fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fa-solid fa-robot text-blue-600 text-2xl mr-2"></i>
          <span className="font-bold text-xl">InsightAgent</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
          <a href="#output" className="text-gray-700 hover:text-blue-600 transition">Output</a>
          <a href="#for-developers" className="text-gray-700 hover:text-blue-600 transition">For Developers</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-blue-600 font-medium hover:text-blue-700 transition cursor-pointer">Log In</span>
          <span
            onClick={() => setShowCalendly(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer"
          >
            Book a Demo
          </span>        </div>
        <button className="md:hidden text-gray-700">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
