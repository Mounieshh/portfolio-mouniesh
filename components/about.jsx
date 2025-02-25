"use client";

import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="pt-5 md:pt-9 lg:pt-10">
      <div className="min-h-screen py-7 px-4 font-space-grotesk">
        <div className="max-w-7xl mx-auto">
          <h2 className="border-b-2 border-black text-3xl pb-3 font-bold mb-8">
            About
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-xl text-black leading-relaxed">
                Hi, I’m Mouniesh, a web developer pursuing a BE in Computer Science and Engineering. With a strong foundation in web technologies, I specialize in creating engaging, user-friendly digital solutions. I am passionate about leveraging my skills to collaborate on innovative projects that drive technological impact.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:flex md:justify-end">
              <div className="relative w-full aspect-[3/2] h-auto overflow-hidden shadow-lg md:h-[80vh] md:w-[30vw]">
                <Image
                  src="/mouniesh-portfolio.jpg"
                  alt="Mouniesh"
                  fill
                  style={{ objectFit: "cover" }}
                  className="grayscale transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;