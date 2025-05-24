"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.life = Math.random() * 50 + 30;
        this.opacity = 1;
        this.color = `rgba(121,134,156,${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = this.life / 50;
        this.color = `rgba(121,134,156,${this.opacity})`;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticle = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      createParticle(mouseX, mouseY);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      mouseX = touch.clientX;
      mouseY = touch.clientY;
      createParticle(mouseX, mouseY);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create random particles
      if (Math.random() < 0.05) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Limit the number of particles
      if (particles.length > 100) {
        particles = particles.slice(-100);
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative font-space-grotesk max-w-6xl mx-auto px-4 pt-20 py-10 md:pt-28 md:py-12 lg:pt-32 lg:py-14 overflow-hidden before:absolute before:inset-0 before:bg-[linear_gradient(to_right,#00000010_1px,transparent_1px)] before:bg-[size:100px_100%] before:pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-auto z-0"
        style={{ touchAction: 'none' }}
      />

      <div className="relative flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 z-10 w-full">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left lg:text-left relative">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900"
          >
            I&apos;M <br />
            MOUNIESH
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4"
          >
            Student and Developer
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed"
          >
            I'm a passionate developer crafting innovative solutions with code.
            I thrive on turning ideas into functional, beautiful designs that
            make an impact.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="visible"
            className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center md:justify-start"
          >
            <Link href="/contact">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg">
                Contact
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 text-base sm:text-lg">
                Resume
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image on Right */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/project/"
            alt="Mouniesh Hero Image"
            width={350}
            height={480}
            className="w-full h-full object-cover scale-125"
          />
        </motion.div>
      </div>

      <div className="text-center mt-1 md:pt-10 lg:pt-12">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-800 tracking-tight italic"
        >
          "Dreams don't work unless you do."
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
