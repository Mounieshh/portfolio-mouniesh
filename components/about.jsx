"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { SiGeeksforgeeks, SiStackoverflow } from "react-icons/si"

const AboutPage = () => {
  const iconVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, y: -10, opacity: 1 },
    tap: { scale: 1.2, y: -15, opacity: 1, transition: { duration: 0.2 } },
  }

  return (
    <section id="about" className="pt-2 md:pt-8 lg:pt-4">
      <div className="min-h-screen px-4 py-6 font-space-grotesk">
        <div className="max-w-7xl mx-auto">
          <h2 className="border-b-2 border-black text-3xl pb-3 font-bold mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row items-start gap-8">
            <div className="w-full sm:mt-12 md:w-1/2 lg:mt-9">
              <p className="text-xl text-black leading-relaxed mb-6">
              Hi 👋! I’m Mouniesh, a third-year student pursuing a Bachelor of Engineering (BE) in Computer Science and Engineering, with a deep passion for web development. Equipped with a solid foundation in web technologies, I specialize in crafting engaging and user-friendly digital solutions. I am eager to leverage my skills to collaborate on innovative projects that create a meaningful technological impact.
              </p>

              <div className="md:flex md:flex-col lg:flex lg:flex-col mb-7 text-xl font-semibold">
                Check Out
              </div>
              <div className="flex flex-row md:flex-row gap-4 justify-center md:justify-start">
            
                <div className="w-full md:w-auto">
                  <Link
                    href="https://github.com/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <FaGithub className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    href="https://leetcode.com/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <SiLeetcode className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    href="https://www.hackerrank.com/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <FaHackerrank className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    href="https://www.geeksforgeeks.org/users/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <SiGeeksforgeeks className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    href="https://www.linkedin.com/in/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <FaLinkedin className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    href="https://stackoverflow.com/users/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center"
                    >
                      <SiStackoverflow className="text-3xl md:text-4xl mr-2" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:hidden md:w-1/2 md:flex md:justify-end">
              <div className="relative w-full aspect-[2/3] h-auto overflow-hidden shadow-lg md:h-[70vh] md:w-[30vw]">
                <Image
                  src="/project/port.jpg"
                  alt="Mouniesh"
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage