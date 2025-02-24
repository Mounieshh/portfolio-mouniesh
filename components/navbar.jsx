"use client"

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold font-space-grotesk">
            <Link href="#" className="text-black hover:underline hover:underline-offset-4 transition-all duration-300">
              Mouniesh
            </Link>
          </div>

          {/* Navigation Items - Hidden on mobile, visible on medium and larger screens */}
          <div className="hidden md:flex space-x-6 font-semibold font-space-grotesk">
            <Link href="#" className="text-black hover:underline hover:underline-offset-4 transition-all duration-300">
              About
            </Link>
            <Link href="#" className="text-black hover:underline hover:underline-offset-4 transition-all duration-300">
              Projects
            </Link>
            <Link href="#" className="text-black hover:underline hover:underline-offset-4 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Resume - Moved to the right corner */}
          <div className="text-black hover:underline hover:underline-offset-4 transition-all duration-300 font-space-grotesk font-semibold">
            <Link href='#'>
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full black screen with white text, no background, and larger text */}
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-8">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link
              href="#"
              onClick={toggleMenu}
              className="text-white text-4xl font-space-grotesk hover:underline hover:underline-offset-4 transition-all duration-300 text-center px-3 py-2"
            >
              About
            </Link>
            <Link
              href="#"
              onClick={toggleMenu}
              className="text-white text-4xl font-space-grotesk hover:underline hover:underline-offset-4 transition-all duration-300 text-center px-3 py-2"
            >
              Projects
            </Link>
            <Link
              href="#"
              onClick={toggleMenu}
              className="text-white text-4xl font-space-grotesk hover:underline hover:underline-offset-4 transition-all duration-300 text-center px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar