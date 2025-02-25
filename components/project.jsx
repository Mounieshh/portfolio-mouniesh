import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';

const ProjectPage = () => {
  const projects = [
    {
      title: 'Cashless',
      description: 'Managing finances with tools for tracking expenses & budgeting',
      image: '/file.svg', 
      hostedLink: '#',
      githubLink: 'https://github.com/yourusername/cashless-project', 
    },
    {
      title: 'Desserts',
      description: 'An e-commerce website that sells yummy desserts online',
      image: '/file.svg', 
      hostedLink: '#',
      githubLink: 'https://github.com/yourusername/desserts-project',
    },
    {
      title: 'Travel Blog',
      description: 'A personal blog featuring travel stories and tips',
      image: '/file.svg', 
      hostedLink: '#',
      githubLink: 'https://github.com/yourusername/travel-blog',
    },
  ];

  return (
    <div className="min-h-screen py-4 px-4 font-space-grotesk">
      <div className="border-b-2 border-black text-3xl font-semibold pb-3">
        <h2>Featured Works</h2>
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
        <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"    className="inline-block">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-500 hover:text-black transition-colors duration-300">
              View More on Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;