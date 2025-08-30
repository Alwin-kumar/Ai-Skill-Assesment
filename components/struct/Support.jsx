"use client"

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

import { Clock, UserCheck, FileText, MonitorSpeaker } from "lucide-react";


const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];

export  const Support = () => {
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
  }, []); // ✅ add dependency array, otherwise it runs on every render

  return (

    <div className="h-80 m-40 rounded-xl ">
  <div className=" bg-black  p-30 rounded-xl hover-glow-cyan">
    <div className="flex flex-col md:flex-row justify-center items-center hover-glow-cyan
     text-white text-xl md:text-2xl gap-8 text-center font-semibold">
       <div className="flex flex-col items-center gap-2">
        <Clock className="w-8 h-8 text-cyan-400" />
        <p>24/7 AI Career Assistance</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <UserCheck className="w-8 h-8 text-green-400" />
        <p>Get Personalized Guidance</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FileText className="w-8 h-8 text-yellow-400" />
        <p>Instant Resume Feedback</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <MonitorSpeaker className="w-8 h-8 text-pink-400" />
        <p>Prepare for Interviews Confidently</p>
      </div>
    </div>
  </div>


  </div>
    
  );
}

