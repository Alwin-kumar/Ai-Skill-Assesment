"use client"

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Link from "next/link"
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];

export  const HeroSection = () => {
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
    <div className="relative grid  overflow-hidden px-4 text-gray-200">
        
  

    {/* hero */}
    <section className="flex flex-col h-140 items-center justify-center place-content-center text-center"> 
    <p className="font-extrabold text-5xl flex flex-col items-center justify-center place-content-center">Accelerate Your Career With AI🚀 <br />
    <span className="text-[16px] font-extralight m-8 p-2  ">Empowers users to craft standout profiles, boost interview confidence, understand market trends, plan growth paths, <br/> <span className="mt-2"> get instant support, and enhance job applications.</span></span>
    </p>
    
        <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} style={{border, boxShadow}}   className="mt-10   cursor-pointer border group relative hover-glow-cyan  flex  w-fit items-center rounded-full  bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50  text-glow-cyan" >
          <Link href="/onboarding">
          <Button className="cursor-pointer" >
            <span >Get Started</span><Rocket className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </motion.div>
      

    </section>
    
  
    </div>
  );
}

