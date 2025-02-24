"use client"

const Hero = () => {
  return (
    <div className="flex flex-col text-center font-space-grotesk max-w-4xl mx-auto px-4 py-12">
      {/* First Line */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
        I'm Mouniesh
      </h2>

      {/* Second and Third Line */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 md:w-1/2">
          With 8 years of experience, I ask the necessary (and sometimes the difficult questions) to create brands and products that focus on and prioritize people.
        </p>

        {/* Tagline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Amazing Developer
        </h2>
      </div>

      {/* Last Line */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Lives by Developing
      </h2>
    </div>
  )
}

export default Hero