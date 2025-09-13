"use client"

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Link from "next/link"
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];

export  const Step = () => {
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
    <div className="relative grid h-250 overflow-hidden px-4 text-gray-200 my-10 p-8">
        
        <div className="">
            <img src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/0dba005c-cf3e-4b85-9014-ddb6179e6bf4.png"
             alt="" 
             className=" w-130 rounded-3xl hover-glow-cyan mx-5 mb-5 mt-5  "
             />
        </div>

        
  
    </div>
  );
}

