"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, animate, useMotionTemplate, useMotionValue } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import obj1 from "../assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const sectionColor = useMotionValue(COLORS_TOP[0]);
  const buttonColor = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate section color
    const controls = animate(sectionColor, COLORS_TOP[1], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate button color separately
    const buttonControls = animate(buttonColor, COLORS_TOP[2], {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => {
      controls.stop();
      buttonControls.stop();
    };
  }, [sectionColor, buttonColor]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${sectionColor})`;

  return (
    <motion.section
      style={{
        backgroundImage,
        border: `1px solid ${sectionColor.get()}`, // Use .get() to extract value from MotionValue
        boxShadow: `0px 4px 24px ${sectionColor.get()}`, // Use .get() here as well
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm cursor-pointer">
          open for work
        </span>
        <h1 className="text-white/40 text-5xl md:text-7xl font-black text-center">Hi, I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl text-center">
          Sohaib Rizwan
        </h1>
        <Image src={profilepic} alt="profile pic" width={250} />

        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image src={obj1} alt="object" width={30} className="mx-auto rounded-2xl" />
          <Image src={obj1} alt="object" width={30} className="mx-auto rounded-2xl" />
          <Image src={obj1} alt="object" width={30} className="mx-auto rounded-2xl" />
          <p className="font-medium">80+ Happy Clients</p>
        </div>

        <p className="my-6 max-w-xl text-center">
          Frontend Developer based in Pakistan, over 5 years of experience
        </p>

        <motion.button
          style={{
            border: `1px solid ${buttonColor.get()}`, // Use .get() to extract value from MotionValue
            boxShadow: `0px 4px 24px ${buttonColor.get()}`, // Apply extracted value
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 shadow-2xl"
        >
          Download CV
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div></div>
      </div>
    </motion.section>
  );
};
