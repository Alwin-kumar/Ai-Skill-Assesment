"use client"

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Compass, FileText, UserCheck, BarChart2 } from "lucide-react";

const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];

export const Cards = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
    radial-gradient(150% 125% at 20% 0%, #020617 50%, ${color})
  `;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="relative grid h-140 overflow-hidden px-4 text-gray-200">
      <p className="text-6xl flex items-center justify-center text-glow-cyan my-5">Pro Features</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="cursor-pointer border group relative hover-glow-cyan flex items-center rounded-xl py-2 text-gray-50 transition-colors bg-gray-950/50 border-white/20 backdrop-blur-md raise shadow-lg flex-col justify-center"
        >
          <p className="text-lg font-semibold mb-2  flex items-center gap-2">
            <FileText size={24} /> Build Resume
          </p>
          <p className="text-sm text-gray-200/80 px-5 py-3">
            Create a professional resume with AI-powered templates. Customize, edit, and download when required to stay job-ready and confident.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="cursor-pointer border group relative hover-glow-cyan flex items-center rounded-xl py-2 text-gray-50 transition-colors bg-gray-950/50 border-white/20 backdrop-blur-md raise shadow-lg flex-col justify-center"
        >
          <p className="text-lg font-semibold mb-2  flex items-center gap-2">
            <BarChart2 size={24} /> Industry Insights
          </p>
          <p className="text-sm text-gray-200/80 px-5 py-3">
            Access real-time industry insights. Stay updated with trends, tools, and opportunities to make informed decisions and accelerate your career growth.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="cursor-pointer border group relative hover-glow-cyan flex items-center rounded-xl py-2 text-gray-50 transition-colors bg-gray-950/50 border-white/20 backdrop-blur-md raise shadow-lg flex-col justify-center"
        >
          <p className="text-lg font-semibold mb-2  flex items-center gap-2">
            <Compass size={24} /> AI Career Guidance
          </p>
          <p className="text-sm text-gray-200/80 px-5 py-3">
            Get personalized career guidance with our AI chatbot. Ask questions, explore options, and receive tailored advice to shape your future.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="cursor-pointer border group relative hover-glow-cyan flex items-center rounded-xl py-2 text-gray-50 transition-colors bg-gray-950/50 border-white/20 backdrop-blur-md raise shadow-lg flex-col justify-center"
        >
          <p className="text-lg font-semibold mb-2  flex items-center gap-2">
            <UserCheck size={24} /> Interview Preparation
          </p>
          <p className="text-sm text-gray-200/80 px-5 py-3">
            Prepare for interviews with AI-powered practice. Get common questions, feedback, and tips to build confidence and improve your performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
