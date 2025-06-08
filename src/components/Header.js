// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setShowCalendly }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePricingClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faRobot} className="text-blue-600 text-2xl" />
          <span className="font-bold text-xl whitespace-nowrap">InsightAgent</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')} className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Features</a>
          <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, '#how-it-works')} className="text-gray-700 hover:text-blue-600 whitespace-nowrap">How It Works</a>
          <a href="#output" onClick={(e) => handleAnchorClick(e, '#output')} className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Output</a>
          <a href="#for-developers" onClick={(e) => handleAnchorClick(e, '#for-developers')} className="text-gray-700 hover:text-blue-600 whitespace-nowrap">For Developers</a>
          <a href="/pricing" onClick={handlePricingClick} className="text-gray-700 hover:text-blue-600 whitespace-nowrap">Pricing</a>
          <a
            href="https://demo.insightagent.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
          >
            Log In
          </a>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faRobot} className="text-blue-600 text-2xl" />
              <span className="font-bold text-xl">InsightAgent</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')} className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, '#how-it-works')} className="text-gray-700 hover:text-blue-600">How It Works</a>
            <a href="#output" onClick={(e) => handleAnchorClick(e, '#output')} className="text-gray-700 hover:text-blue-600">Output</a>
            <a href="#for-developers" onClick={(e) => handleAnchorClick(e, '#for-developers')} className="text-gray-700 hover:text-blue-600">For Developers</a>
            <a href="/pricing" onClick={handlePricingClick} className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a
              href="https://demo.insightagent.io/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
            >
              Log In
            </a>
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