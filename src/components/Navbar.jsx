import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { FcContacts } from 'react-icons/fc'
import { FcServices } from 'react-icons/fc'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaSignOutAlt} from 'react-icons/fa'
import {GoSignIn} from 'react-icons/go'
import {MdCreate} from 'react-icons/md'
import {CiViewList} from 'react-icons/ci'

const Navbar = () => {
  const username = localStorage.getItem("username");
  function handleSignOut() {
    // Remove the current user from localStorage
    localStorage.removeItem("username");
  
    // Redirect to the login page
    window.location.href = "/";
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  justify-between">
            <Link
              to="/"
              className="flex-shrink-0 font-bold text-white hover:text-gray-300"
            >
              JNA
            </Link>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FaHome /> Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FcAbout />About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FcServices />Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FcContacts /> Contact
                </Link>
                <p className="text-white">{username && <div className="success-message"> < BsFillPersonFill />{username}</div>}</p>
                {username ? (
                  <>
                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/createpost'> <MdCreate /> Create A Post</Link>
                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/allposts'><CiViewList />All Posts</Link>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleSignOut}><FaSignOutAlt /> Sign Out</button>
                  </>
                ):(
                
                    <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/signin'> <GoSignIn/> Sign In</Link>
                  
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <FcAbout /> About
              </Link>
              <Link
              to="/services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <FcServices /> Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <FcContacts /> Contact
              </Link>
              <p className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{username && <div className="success-message"> < BsFillPersonFill />{username}</div>}</p>
              {username ? (
                  <>
                <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/createpost'> <MdCreate /> Create A Post</Link>
                <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/allposts'><CiViewList />All Posts</Link>
                <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleSignOut}><FaSignOutAlt /> Sign Out</button>
                  </>
                ):(
                
                    <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/signin'> <GoSignIn/> Sign In</Link>
                  
                )}
            </div>
          </div>
        )}
      </nav>
      );
      };
      
      export default Navbar;
      
      
      
      
      
      
