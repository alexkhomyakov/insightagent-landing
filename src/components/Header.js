// src/components/Header.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setShowCalendly }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faRobot} className="text-blue-600 text-2xl" />
          <span className="font-bold text-xl whitespace-nowrap">InsightAgent</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">How It Works</a>
          <a href="#output" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Output</a>
          <a href="#for-developers" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">For Developers</a>
          <button className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">Log In</button>
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition whitespace-nowrap"
          >
            Book a Demo
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faRobot} className="text-blue-600 text-2xl" />
              <span className="font-bold text-xl">InsightAgent</span>
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#output" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">Output</a>
            <a href="#for-developers" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-600">For Developers</a>
            <button
              className="text-blue-600 hover:text-blue-700 text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setShowCalendly(true);
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Book a Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;