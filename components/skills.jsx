"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiMongodb,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const techStacks = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
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
      { name: "APIs", icon: <DiJavascript /> },
      { name: "JWT", icon: <DiJavascript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Vercel", icon: <SiVercel /> },
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
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

// Optimized SkillCard Component
const SkillCard = memo(({ skill }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-2 rounded-md shadow text-center hover:shadow-md transition-shadow duration-200 flex flex-col items-center"
  >
    <div className="text-black text-lg mb-1">{skill.icon}</div>
    <h3 className="text-sm font-medium text-black">{skill.name}</h3>
  </motion.div>
));

const SkillsPage = () => {
  return (
    <div className="min-h-screen py-6 px-4 font-space-grotesk">
      <div className="border-b border-black text-3xl font-semibold pb-2 mb-6">
        <h1>Skills</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        {techStacks.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="mb-8">
            <h2 className="text-lg font-medium text-black mb-4">
              {section.category}
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {section.skills.map((skill, skillIndex) => (
                <SkillCard key={`skill-${skillIndex}`} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
