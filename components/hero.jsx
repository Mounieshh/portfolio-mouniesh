"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="font-space-grotesk max-w-6xl mx-auto px-4 py-12 md:py-14 lg:py-16">
      {/* Main Container: Two Halves */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8">
        {/* Left Half: Profile Image (Centered on sm, Centered on md/lg at red X position) */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center">
          <Link href="/">
            <Image
              src="/globe.svg"
              alt="Mouniesh's profile"
              width={150}
              height={150}
              className="hover:opacity-80 transition-opacity md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Right Half: Text Content */}
        <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left">
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900">
            I’m Mouniesh
          </h1>

          {/* Tagline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4">
            AKA Developer
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            I’m a passionate developer crafting innovative solutions with code.
            I thrive on turning ideas into functional, beautiful designs that
            make an impact.
          </p>

          {/* Contact and Resume Buttons */}
          <div className="flex flex-row sm:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-center md:justify-start lg:justify-start">
            <Link href="/contact">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg md:text-lg lg:text-lg md:mb-14 lg:mb-16">
                Contact
              </button>
            </Link>

            <Link href="/resume">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg md:text-lg lg:text-lg md:mb-14 lg:mb-16">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line: Shaping the Future */}
      <div className="text-center mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl text-gray-800 tracking-tight">
          Shaping the Future
        </h2>
      </div>
    </section>
  );
};

export default Hero;