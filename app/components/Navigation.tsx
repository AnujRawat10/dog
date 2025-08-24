"use client";

import { useState } from "react";

interface NavigationProps {
  currentBgColor: string;
}

export default function Navigation({ currentBgColor }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine if the background is light or dark to adjust text color
  const isLightBackground = (color: string) => {
    const rgb = color.match(/\w\w/g);
    if (!rgb) return true;
    const [r, g, b] = rgb.map((x) => parseInt(x, 16));
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  const textColor = isLightBackground(currentBgColor)
    ? "text-gray-800"
    : "text-white";
  const hoverColor = isLightBackground(currentBgColor)
    ? "hover:text-gray-600"
    : "hover:text-gray-200";

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-1000'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className={`text-2xl font-bold lowercase ${textColor}`}>
              furs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <a
                href='#services'
                className={`${textColor} ${hoverColor} transition-colors px-3 py-2 text-sm font-medium lowercase`}
              >
                services
              </a>
              <a
                href='#about'
                className={`${textColor} ${hoverColor} transition-colors px-3 py-2 text-sm font-medium lowercase`}
              >
                about
              </a>
              <a
                href='#blogs'
                className={`${textColor} ${hoverColor} transition-colors px-3 py-2 text-sm font-medium lowercase`}
              >
                blogs
              </a>
              <a
                href='#contact'
                className={`${textColor} ${hoverColor} transition-colors px-3 py-2 text-sm font-medium lowercase`}
              >
                contact
              </a>
            </div>
          </div>

          {/* Book Now Button */}
          <div className='hidden md:block'>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 lowercase transform hover:scale-105 bg-white/15 border border-white/20 hover:bg-white/25 ${
                isLightBackground(currentBgColor)
                  ? "text-gray-800 hover:text-gray-700"
                  : "text-white hover:text-gray-100"
              }`}
            >
              book now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50`}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#services'
              className={`${textColor} ${hoverColor} block px-3 py-2 text-base font-medium lowercase`}
            >
              services
            </a>
            <a
              href='#about'
              className={`${textColor} ${hoverColor} block px-3 py-2 text-base font-medium lowercase`}
            >
              about
            </a>
            <a
              href='#blogs'
              className={`${textColor} ${hoverColor} block px-3 py-2 text-base font-medium lowercase`}
            >
              blogs
            </a>
            <a
              href='#contact'
              className={`${textColor} ${hoverColor} block px-3 py-2 text-base font-medium lowercase`}
            >
              contact
            </a>
            <button
              className={`w-full mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 lowercase bg-white/15 border border-white/20 hover:bg-white/25 ${
                isLightBackground(currentBgColor)
                  ? "text-gray-800 hover:text-gray-700"
                  : "text-white hover:text-gray-100"
              }`}
            >
              book now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
