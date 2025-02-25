"use client"

import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 font-space-grotesk">
      <div className="max-w-7xl mx-auto">
        <h2 className="border-b-2 border-black text-3xl pb-3 font-bold mb-8">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text (Left Side on Desktop, Full Width on Mobile) */}
          <div className="md:w-1/2 w-full">
            <p className="text-xl font-semibold text-black leading-relaxed">
              Hi, I’m Martin Taylor, an art director and product designer based in London. With my background in visual arts and technology, I specialize in creating engaging user experiences through interactive design. I am deeply passionate about using my creative skills to collaborate on innovative and meaningful projects that make a genuine impact.
            </p>
          </div>

          {/* Photo (Right Side on Desktop, Full Width on Mobile) - Updated to Rectangle */}
          <div className="md:w-1/2 w-full flex justify-end">
            <div className="relative h-[70vh] w-[30vw] overflow-hidden shadow-lg">
              <Image
                src="/vercel.svg"
                alt="Martin Taylor"
                fill
                style={{ objectFit: 'cover' }}
                className="grayscale transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage