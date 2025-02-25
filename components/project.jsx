"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGlobe, FaGithub, FaArrowRight } from 'react-icons/fa' // Added FaArrowRight for hover effect

const ProjectPage = () => {
  const projects = [
    {
      title: 'SPARKHUB',
      description: [
        'Built a Learning Management Platform with Next.js, Tailwind CSS, Firebase, and Spline 3D.',
        'Enabled blog management and user authentication via Firebase, with interactive Spline 3D models.',
        'Created a resource hub with tutorials, tools, and embedded simulations for enhanced learning.',
      ],
      image: '/project/Spark.jpg',
      hostedLink: 'https://spark-hub-one.vercel.app/',
      githubLink: 'https://github.com/kathirKarthik001/Spark-hub',
    },
    {
      title: 'BOOK IT',
      description: [
        'Developed a Hall Booking System using the MERN Stack, JWT, Node-mailer, and Node Scheduler.',
        'Implemented role-based authentication and real-time notifications via Node-mailer.',
        'Designed a seamless platform for booking and managing event halls with automated updates.',
      ],
      image: '/project/Book.jpg',
      hostedLink: 'https://book-it-mern-app-mk.vercel.app/',
      githubLink: 'https://github.com/kathirKarthik001/Book-it',
    },
    {
      title: 'GOALS SETTER APP',
      description: [
        'Created a Task Management App with the MERN Stack, Redux Toolkit, and JWT.',
        'Secured user access with JWT authentication, bcrypt.js, and real-time notifications via Toast.',
        'Built RESTful APIs using Node.js, Express.js, and MongoDB with Mongoose for efficient goal management.',
      ],
      image: '/project/Goal.jpg',
      hostedLink: 'https://github.com/Mounieshh/Goal_Setter_App',
      githubLink: 'https://github.com/Mounieshh/Goal_Setter_App',
    },
  ]

  return (
    <section id="project" className="pt-9">
      <div className="min-h-screen py-4 px-4 font-space-grotesk">
        <div className="border-b-2 border-black text-3xl font-semibold pb-3">
          <h2>Featured Projects</h2>
        </div>

        <div className="mt-4">
          {projects.map((project, item) => (
            <div key={item} className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 rounded-lg shadow-md mb-8">
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-semibold text-black mb-6">
                  {project.title}
                </h3>
                <div className="mt-4">
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    {project.description.map((point, index) => (
                      <li key={index} className="text-base leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4 mt-4">
                    <Link href={project.hostedLink} className="inline-block" target='_blank'>
                      <button className="hover:bg-gray-100 transition-colors duration-300 flex items-center">
                        <FaGlobe className="mr-2" size={20} />
                      </button>
                    </Link>

                    <Link href={project.githubLink} className="inline-block" target='_blank'>
                      <button className="hover:bg-gray-100 transition-colors duration-300 flex items-center">
                        <FaGithub className="mr-2" size={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center w-full">
                <Link href={project.hostedLink} target="_blank" className="relative w-full">
                  <div className="relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg p-4 border border-gray-300"> 
                    <Image
                      src={project.image}
                      alt={`${project.title} image`}
                      width={350}
                      height={350}
                      className="rounded-lg object-cover transition-opacity duration-300 w-[100vw]"
                    />
                    {/* Hover Icon (Directing Arrow) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                    >
                      <FaArrowRight className="text-white text-4xl" />
                    </motion.div>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-start">
            <Link href="https://github.com/Mounieshh?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-500 hover:text-black transition-colors duration-300">
                View More on Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage