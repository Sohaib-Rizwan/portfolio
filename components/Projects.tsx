"use client";

import React, { useState, useEffect } from "react"; // Added 'useEffect' import
import Image from "next/image";
import project1 from "../assets/proj5.png";
import project2 from "../assets/proj6.png";
import project3 from "../assets/proj7.png";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
// Define TypeScript type for projects
type Project = {
  id: string;
  year: number;
  title: string;
  description: string;
  image: any; // Using 'any' for static imports; could be 'StaticImageData' from next/image
};

// Projects data
const projects: Project[] = [
  {
    id: "1",
    year: 2023,
    title: "Doodle - Customer support chatbot",
    description:
      "We built an advanced customer support chatbot using React and Node.js. The chatbot is designed to provide instant responses to customer inquiries, helping businesses improve their customer service efficiency.",
    image: project1,
  },
  {
    id: "2",
    year: 2024,
    title: "Dash - AI calling system",
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automation.",
    image: project2,
  },
  {
    id: "3",
    year: 2024,
    title: "Atomic - AI web application",
    description:
      "Atomic is a cutting-edge web application that leverages the power of AI to provide personalized recommendations and insights.",
    image: project3,
  },
];
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const sectionColor = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate section color
    const controls = animate(sectionColor, COLORS_TOP[1], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Cleanup animation on component unmount
    return () => controls.stop();
  }, [sectionColor]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${sectionColor})`;

  return (
    <motion.section
        style={{
          backgroundImage
        }}

     id="portfolio" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        
        {/* Left Side - Projects List */}
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>
          
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${
                  selectedProject.id === project.id ? "text-gray-200" : ""
                }`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-gray-200 my-4"></div>
                  <p className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Selected Project Image */}
        <div className="flex justify-center items-center">
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;