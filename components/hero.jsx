"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {

    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 100 - 50,
        opacity: Math.random(),
      });
    }
    setParticles(particleArray);

    // Clear particles after animation
    setTimeout(() => setParticles([]), 2000);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
  };

  return (
    <section className="font-space-grotesk max-w-6xl mx-auto px-4 pt-20 py-10 md:pt-28 md:py-12 lg:pt-32 lg:py-14">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8">
        <div className="md:flex hidden md:w-1/2 lg:w-1/2 justify-center items-center">
          <Link href="/">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="w-[350px] h-[340px] rounded-full object-cover"
            >
              <Image
                src="/svg/absurd.png"
                alt="Mouniesh's profile"
                width={300}
                height={300}
                className="w-full h-full rounded-full object-cover hover:opacity-80 transition-opacity"
              />
            </motion.div>
          </Link>
        </div>

        <div className="w-full md:hidden flex justify-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-[200px] h-[200px] rounded-full object-cover"
          >
            <Image
              src="/project/port-new.jpg"
              alt="Portfolio Image"
              width={260}
              height={260}
              className="w-full h-full rounded-full object-cover hover:opacity-80 transition-opacity"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left relative">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900 relative"
          >
            I’m Mouniesh
            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0,
                  transition: { duration: 1.5 },
                }}
                className="absolute text-gray-400"
              >
                •
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4"
          >
            AKA Developer
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed"
          >
            I’m a passionate developer crafting innovative solutions with code.
            I thrive on turning ideas into functional, beautiful designs that
            make an impact.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="visible"
            className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center md:justify-start lg:justify-start"
          >
            <Link href="/contact">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg md:text-lg lg:text-lg">
                Contact
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg md:text-lg lg:text-lg">
                Resume
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="text-center mt-6 md:pt-10 lg:pt-12">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 tracking-tight italic"
        >
          "Dreams don’t work unless you do."
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
