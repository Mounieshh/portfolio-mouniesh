"use client";

import { memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiExpress, SiFirebase, SiVercel, SiMongodb, SiPostman, SiFigma, SiMysql, SiJsonwebtokens } from "react-icons/si";
import { DiJavascript, DiPython, DiJava } from "react-icons/di";
import { useRef } from "react";

const techStacks = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <DiPython /> },
      { name: "Java", icon: <DiJava /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <DiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql/> },
      { name: "JWT", icon: <SiJsonwebtokens/> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: <DiJavascript /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const tabVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
};

const SkillTab = memo(({ skill, index }) => (
  <motion.div
    variants={skillVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ 
      scale: 1.05,
      y: -3,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    whileTap={{ scale: 0.98 }}
    className="group relative bg-white rounded-t-lg border-2 border-b-0 border-gray-300 p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer min-h-[80px] flex flex-col items-center justify-center"
    style={{ 
      clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 100%, 0% 100%)',
      animationDelay: `${index * 0.05}s`
    }}
  >
    {/* Browser tab close button */}
    <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
    </div>
    
    {/* Tab content */}
    <div className="flex flex-col items-center text-center">
      <motion.div 
        className="text-black text-2xl mb-2"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {skill.icon}
      </motion.div>
      <h3 className="text-xs font-medium text-black truncate max-w-full">
        {skill.name}
      </h3>
    </div>

    {/* Active tab indicator */}
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 origin-left"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
));

const BrowserWindow = memo(({ stack, index }) => (
  <motion.div
    variants={tabVariants}
    className="bg-gray-100 rounded-lg shadow-xl border border-gray-300 overflow-hidden"
  >
    {/* Browser header */}
    <div className="bg-white border-b border-gray-300 px-4 py-3 flex items-center gap-2">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600 text-center">
          {stack.category.toLowerCase().replace(' ', '-')}.dev
        </div>
      </div>
    </div>

    {/* Browser content area */}
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-black mb-6 text-center">{stack.category}</h2>
      
      {/* Tab bar simulation */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {stack.skills.map((skill, skillIndex) => (
            <SkillTab key={skillIndex} skill={skill} index={skillIndex} />
          ))}
        </div>
        
        {/* Browser bottom bar */}
        <div className="border-t border-gray-300 pt-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{stack.skills.length} tabs open</span>
            <span>Skills loaded ✓</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

const SkillsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.03]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 pb-20">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-auto px-4 font-space-grotesk py-10 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="border-b-2 border-black text-3xl font-semibold pb-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            variants={{ visible: { transition: { duration: 0.6 } } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1>Skills</h1>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {techStacks.map((stack, index) => (
              <BrowserWindow key={index} stack={stack} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsPage;