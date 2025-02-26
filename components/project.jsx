import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';

const ProjectPage = () => {
  const projects = [
        {
          title: 'SPARKHUB',
          description: 'A Learning Management Platform built with Next.js, Tailwind CSS, Firebase, and Spline 3D. Developed a static learning management platform enabling users to post, edit, and manage blogs after Google authentication via Firebase. Includes user authentication, blog image storage, interactive Spline 3D models, embedded simulations, and a resource hub with tutorials and tools.',
          image: '/Spark_hub.jpg',
          hostedLink: 'Live Link', 
          githubLink: 'https://github.com/yourusername/sparkhub-project', 
        },
        {
          title: 'BOOK IT',
          description: 'A Hall Booking System developed with the MERN Stack, JWT, Node-mailer, and Node Scheduler. Created a seamless platform for booking and managing event halls, featuring role-based authentication, real-time notifications via Node-mailer, and automated updates using Node Scheduler.',
          image: '/Book_I.jpg',
          hostedLink: 'Live Link', 
          githubLink: 'https://github.com/yourusername/bookit-project', 
        },
        {
          title: 'GOALS SETTER APP',
          description: 'A Task Management App built with the MERN Stack, Redux Toolkit, and JWT. Enables users to set and manage goals securely with JWT-based authentication, bcrypt.js for password encryption, Redux Toolkit for state management, and real-time notifications via Toast. Features RESTful APIs with Node.js, Express.js, and MongoDB via Mongoose.',
          image: '/Goals.jpg',
          hostedLink: '#', 
          githubLink: 'https://github.com/yourusername/goals-setter-project', 
        }
  ];

  return (
    <section id='project' className='pt-9'>
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
              <div className="mt-4 ">
                <p className="text-black mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <Link href={project.hostedLink} className="inline-block">
                    <button className="hover:bg-gray-100 transition-colors duration-300 flex items-center">
                      <FaGlobe className="mr-2" size={20} />
                    </button>
                  </Link>

                  <Link href={project.githubLink} className="inline-block">
                    <button className="hover:bg-gray-100 transition-colors duration-300 flex items-center">
                      <FaGithub className="mr-2" size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center w-full">
              <Image
                src={project.image}
                alt={`${project.title} image`}
                width={350}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-start">
        <Link href="https://github.com/Mounieshh?tab=repositories" target="_blank" rel="noopener noreferrer"    className="inline-block">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-500 hover:text-black transition-colors duration-300">
              View More on Github
            </button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProjectPage;