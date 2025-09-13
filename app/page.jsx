"use client"

import { Cards } from "@/components/struct/Cards";
import { HeroSection } from "@/components/struct/hero";


import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Link from "next/link"
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Banner } from "@/components/struct/banner/banner";
import Image from "next/image";
import { Support } from "@/components/struct/Support";
import { Step } from "@/components/struct/step";


const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];




export default function Home() {

  const color = useMotionValue(COLORS[0]);
  const backgroundImage1 = useMotionTemplate`
radial-gradient(circle farthest-corner at center, #020617 75%, ${color})
  `;
  const backgroundImage = useMotionTemplate`
    radial-gradient(150% 125% at 0% 30%, #020617 20%, ${color})
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
    <motion.div
      style={{ backgroundImage ,backgroundImage1 }}
      className="relative grid  overflow-hidden px-4 text-gray-200"
    >
      {/* starfield background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={6000} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <HeroSection />
      <div className="flex justify-center relative  h-250 overflow-hidden px-4 text-gray-200 my-10 p-8">
        <img
          src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/0d5e77f7-ca6f-499d-a689-c80e4ec29cb6.png"
          
          className="rounded-2xl  mx-22 w-full h-180 mb-25 hover-glow-cyan raise p-0"
        />
      </div>
      

      <Cards/>
      <Support/>
      <Step/>
    </motion.div>
  );
}
