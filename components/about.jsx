"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiStackoverflow } from "react-icons/si";

const AboutPage = () => {
  const iconVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, y: -10, opacity: 1 },
    tap: { scale: 1.2, y: -15, opacity: 1, transition: { duration: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="pt-2 md:pt-8 lg:pt-4 max-w-6xl mx-auto px-4 overflow-hidden">
      <motion.div
        ref={ref}
        className="px-4 py-6 font-space-grotesk min-h-[70vh] md:min-h-[90vh] w-full"
        style={{ scale, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="border-b-2 border-black text-3xl pb-3 font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row lg:flex-row items-start gap-8 w-full">
            <div className="w-full md:w-1/2">
              <motion.div
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                <p className="text-lg text-black leading-relaxed mb-4 sm:mb-6 text-justify">
                  Hi 👋! I'm Mouniesh, a third-year Computer Science and Engineering student passionate about web development. With a strong foundation in web technologies, I specialize in creating user-friendly digital solutions and am excited to contribute to innovative, impactful projects.
                </p>
              </motion.div>

              <motion.div
                className="md:flex md:flex-col lg:flex lg:flex-col mb-4 sm:mb-7 text-xl font-semibold"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                Profiles
              </motion.div>
              <motion.div
                className="flex flex-row flex-wrap gap-4 justify-center md:justify-start pb-4 sm:pb-0"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="w-auto">
                  <Link
                    href="https://www.linkedin.com/in/mouniesh-vijayakumar-2447a2256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
                <div className="w-auto">
                  <Link
                    href="https://github.com/Mounieshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
                <div className="w-auto">
                  <Link
                    href="https://leetcode.com/u/Mounieshh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
                <div className="w-auto">
                  <Link
                    href="https://www.hackerrank.com/profile/iammounieshv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
                <div className="w-auto">
                  <Link
                    href="https://www.geeksforgeeks.org/user/iammounenvb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
                <div className="w-auto">
                  <Link
                    href="https://stackoverflow.com/users/24472241/mouniesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-300 flex items-center justify-center"
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
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">B.E. Computer Science and Engineering</h4>
                        <p className="text-gray-600">KPR Institute of Engineering and Technology</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">2026</p>
                        <p className="text-gray-600">CGPA: 8.5/10</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">Secondary School Education</h4>
                        <p className="text-gray-600">Government Higher Secondary School</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">2022</p>
                        <p className="text-gray-600">91.3%</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">Higher Secondary Education</h4>
                        <p className="text-gray-600">Government Higher Secondary School</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">2020</p>
                        <p className="text-gray-600">88.8%</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;