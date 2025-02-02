"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import frame from "@/public/assets/frames/content-image-1.png";

import analysis from "@/public/assets/icons/analysis.png";
import graph from "@/public/assets/icons/graph.png";
import consult from "@/public/assets/images/partners/consult.jpg";
import WaveLines1 from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
const WaveLines2 = "/assets/backgrounds/WaveLinesDesktop2.svg";
const WaveLines3 = "/assets/backgrounds/WaveLinesDesktop3.svg";
const WaveLines4 = "/assets/backgrounds/WaveLinesDesktop4.svg";
import Link from "next/link";
import Consult from "./Consult";
import Implement from "./Implement";
import Operate from "./Operate";

const inspiration = "/assets/images/partners/inspiration.png";
const table = "/assets/images/partners/table.png";
const monitor = "/assets/images/partners/monitor.png";
gsap.registerPlugin(ScrollTrigger);
const ServiceComponent = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const svgRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    gsap.to(svgRef.current, {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  useEffect(() => {
    // Animate Icons: Up-and-down movement asynchronously
    gsap.to(".icon-left-1", {
      y: "-20px", // Move up by 20px
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 1.5, // Duration of one up-down cycle
      ease: "power1.inOut", // Smooth easing for up-and-down motion
      delay: 0.2, // Delay to make it asynchronous
    });

    gsap.to(".icon-left-2", {
      y: "-25px", // Move up by 25px
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 1.5, // Duration of one up-down cycle
      ease: "power1.inOut", // Smooth easing for up-and-down motion
      delay: 0.4, // Delay to make it asynchronous
    });

    gsap.to(".icon-right", {
      y: "-30px", // Move up by 30px
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 1.5, // Duration of one up-down cycle
      ease: "power1.inOut", // Smooth easing for up-and-down motion
      delay: 0.6, // Delay to make it asynchronous
    });
  }, []);
  useEffect(() => {
    gsap.to(waveRef.current, {
      x: 15, // Horizontal movement
      y: 10, // Vertical movement
      duration: 6,
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse animation
      ease: "sine.inOut", // Smooth animation
    });
  }, []);

  return (
    <div className="scroll-smooth container mx-auto">
      {" "}
      {/* Enables smooth scrolling */}
      <nav className="min-h-screen flex flex-col gap-9 md:flex-row items-center justify-between px-6 md:px-16 lg:px-24">
        <Link href="#consult">
          <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 hover:bg-sky-100 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
            <Image
              src={inspiration}
              alt="share"
              width={20}
              height={20}
              className="bg-sky-200 p-2 w-12 h-12 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold text-start">
              Consult
            </h3>
            <p className="text-lg text-blue-900 text-start">
              Our breadth of consulting expertise spans from applying the latest
              financial technologies to optimizing your business strategies,
              ensuring you stay ahead in the competitive market.
            </p>
          </div>
        </Link>

        <Link href="#implement">
          <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 hover:bg-sky-100 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
            <Image
              src={table}
              alt="share"
              width={20}
              height={20}
              className="bg-sky-200 p-2 w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="text-2xl text-blue-950 font-bold text-center">
              Implement
            </h3>
            <p className="text-lg text-blue-900 text-center">
              Combining deep technology expertise with a profound understanding
              of the financial sector, we deliver tailored solutions that drive
              efficiency and innovation.
            </p>
          </div>
        </Link>

        <Link href="#operate">
          <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 hover:bg-sky-100 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
            <Image
              src={monitor}
              alt="share"
              width={20}
              height={15}
              className="bg-sky-200 p-2 w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="text-2xl text-blue-950 font-bold text-center">
              Operate
            </h3>
            <p className="text-lg text-blue-900 text-center">
              We provide a full suite of operational and support services,
              ensuring your systems run smoothly and efficiently, allowing you
              to focus on your core business objectives.
            </p>
          </div>
        </Link>
      </nav>
      <Consult />
      <Implement />
      <Operate />
    </div>
  );
};

export default ServiceComponent;
