import React from 'react';
import { FaStar } from 'react-icons/fa'; 
const ExperiencePage = () => {
  return (
    <div className="min-h-screen py-8 px-4 font-space-grotesk">
      {/* Heading */}
      <div className="border-b-2 border-black text-3xl font-semibold pb-3 mb-8">
        <h1>Experience</h1>
      </div>

      {/* Description */}
      <p className="text-black mb-8 max-w-2xl">
        I’ve gained valuable experience through internships, working in dynamic environments where I’ve honed my skills and collaborated on impactful projects.
      </p>

      {/* Timeline Container for Desktop/Tablets, Stacked Cards for Mobile */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line - Hidden on mobile, visible on md and up */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black hidden md:block"></div>

        {/* First Internship */}
        <div className="mb-8">
          {/* Desktop/Tablets: Left-aligned card with timeline */}
          <div className="hidden md:flex justify-start w-full">
            <div className="bg-white p-6 rounded-lg shadow-md w-5/12 ml-auto relative">
              <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                <FaStar className="text-black" size={20} /> {/* Star icon instead of dot */}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Velam AI</h3>
              <p className="text-black">Web Development Intern</p>
              <p className="text-black mt-2">Jan 2024 - Feb 2024</p>
            </div>
          </div>

          {/* Mobile: Stacked card without timeline */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:hidden">
            <h3 className="text-xl font-semibold text-black mb-2">Velam AI</h3>
            <p className="text-black">Web Development Intern</p>
            <p className="text-black mt-2">Jan 2024 - Feb 2024</p>
          </div>
        </div>

        {/* Second Internship */}
        <div className="mb-8">
          <div className="hidden md:flex justify-end w-full">
            <div className="bg-white p-6 rounded-lg shadow-md w-5/12 mr-auto relative">
              <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                <FaStar className="text-black" size={20} /> {/* Star icon instead of dot */}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">The Foundax Company</h3>
              <p className="text-black">Web Development Intern</p>
              <p className="text-black mt-2">Apr 2024 - Sep 2024</p>
            </div>
          </div>

          {/* Mobile: Stacked card without timeline */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:hidden">
            <h3 className="text-xl font-semibold text-black mb-2">The Foundax Company</h3>
            <p className="text-black">Web Development Intern</p>
            <p className="text-black mt-2">Apr 2024 - Sep 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;