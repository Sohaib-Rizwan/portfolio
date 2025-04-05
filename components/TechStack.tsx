"use client";

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiTailwindcss, SiWordpress,
  SiElementor, SiGit, SiGithub, SiPython, SiDjango, 
  SiExpress, SiMongodb, SiDocker, SiAmazon 
} from "react-icons/si";
import { motion } from "framer-motion";

interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const TechStack = () => {
  const techStack: TechStackItem[] = [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "WordPress", icon: <SiWordpress />, color: "text-blue-600" },
    { name: "Elementor", icon: <SiElementor />, color: "text-red-600" },
    { name: "Git", icon: <SiGit />, color: "text-orange-600" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    // New icons
    { name: "Python", icon: <SiPython />, color: "text-blue-400" },
    { name: "Django", icon: <SiDjango />, color: "text-green-700" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-100" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
    { name: "AWS", icon: <SiAmazon />, color: "text-orange-500" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-3xl font-bold text-center mb-8 text-white"
        >
          My Stack
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ 
                delay: index * 0.05,
                type: "spring", 
                stiffness: 100,
                damping: 20
              }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-4xl mb-2 ${tech.color}`}
              >
                {tech.icon}
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white text-sm font-medium text-center"
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;