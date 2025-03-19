import React, { useState } from "react";
import image from '../../assets/logo.jpg';
import { useNavigate } from "react-router-dom";

const NavBarComponent = ({ searchKey, searchBarHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
 const navigate=new useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const storedUsername = localStorage.getItem('username')

  const logoutHandler=()=>{
    localStorage.removeItem('')
    navigate('/')
  }

  return (
    <div className="bg-black text-white w-full fixed z-10">
      <div className="max-w-7xl mx-auto py-2">
        {/* Main Navbar - Desktop */}
        <div className="hidden md:flex md:items-center md:justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img src={image} className="w-8 h-8 rounded-full" alt="Logo" />
            <p className="ml-2 text-lg font-bold">MovieFlix</p>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-white border-2 rounded-full flex items-center px-4 py-1">
              <input
                className="w-full focus:outline-none text-black placeholder:text-gray-500 text-sm"
                type="text"
                placeholder="Search Movies"
                value={searchKey}
                onChange={searchBarHandler}
              />
              <button className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>

            
          </div>

          {/* User Controls */}
          <div className="flex items-center space-x-4">
            {/* User Profile */}
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="ml-2">{storedUsername}</span>
            </div>

            {/* Logout Button */}
            <button
              className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 text-sm"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          {/* Top Bar with Logo and Menu Toggle */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img src={image} className="w-8 h-8 rounded-full" alt="Logo" />
              <p className="ml-2 text-lg font-bold">MovieFlix</p>
            </div>

            {/* Menu Toggle */}
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Search Bar - Mobile (Always Visible) */}
          <div className="px-4 py-2">
            <div className="bg-white border-2 rounded-full flex items-center px-4 py-1">
              <input
                className="w-full focus:outline-none text-black placeholder:text-gray-500 text-sm"
                type="text"
                placeholder="Search Movies"
                value={searchKey}
                onChange={searchBarHandler}
              />
              <button className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="px-4 py-3 border-t border-gray-800">
              {/* User Profile */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
                <span className="ml-2">{storedUsername}</span>
              </div>

              {/* Logout Button */}
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-center"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;