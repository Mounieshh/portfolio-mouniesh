"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="font-space-grotesk max-w-6xl mx-auto px-4 pt-20 py-10 md:pt-28 md:py-12 lg:pt-32 lg:py-14">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8">
        <div className="md:flex hidden md:w-1/2 lg:w-1/2 justify-center items-center">
          <Link href="/">
            <Image
              src="/svg/absurd.png"
              alt="Mouniesh's profile"
              width={300}
              height={300}
              className="w-full max-w-[300px] rounded-full object-cover hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <div className="w-full md:hidden flex justify-center">
          <Image
            src="/project/port.jpg"
            alt="Portfolio Image"
            width={260}
            height={260}
            className="w-[200px] h-[200px] rounded-full object-cover hover:opacity-80 transition-opacity"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
            I’m Mouniesh
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4">
            AKA Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            I’m a passionate developer crafting innovative solutions with code.
            I thrive on turning ideas into functional, beautiful designs that
            make an impact.
          </p>
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center md:justify-start lg:justify-start">
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
          </div>
        </div>
      </div>
      <div className="text-center mt-6 md:pt-10 lg:pt-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 tracking-tight italic">
        "Dreams don’t work unless you do."
        </h2>
      </div>
    </section>
  );
};

export default Hero;