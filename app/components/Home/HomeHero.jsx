"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import bg from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
import bg1 from "@/public/assets/backgrounds/WaveLinesDesktop2.svg";
import bank from "@/public/assets/icons/bank.png";
import analysis from "@/public/assets/icons/analysis.png";
import graph from "@/public/assets/icons/graph.png";
import conversation from "@/public/assets/images/conversation.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const svgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Background Animation (Appears Once)
    if (isHovered) {
      gsap.to(svgRef.current, {
        x: 15, // Tilt effect along the X-axis
        y: 10, // Tilt effect along the Y-axis
        duration: 10,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation on every iteration
        ease: "sine.inOut", // Smooth easing for tilt
      });
    } else {
      // Reset the tilt effect when the mouse leaves
      gsap.to(imageContainerRef.current, {
        x: 2,
        y: 5,
        duration: 5, // Smooth transition back
      });
    }

    // Background Animation (Waves)
    gsap.to(svgRef.current, {
      rotation: 5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, [isHovered]);

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

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Left: Text Section */}
      <div className="z-10 max-w-2xl text-left space-y-6">
        <p className=" font-bold text-blue-600">
          POWERING THE FUTURE OF FINANCE
        </p>
        <h1 className="text-5xl md:text-5xl font-semibold text-blue-950">
          Uncovering new ways to delight customers
        </h1>
        <p className="text-lg font-bold text-blue-950">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-lg text-blue-950">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Right: Image with Background Animation */}
      <div
        ref={imageContainerRef}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        {/* Icons positioned on the image with round gradient backgrounds */}
        <div className="absolute top-1/3 left-0 transform translate-x-5 z-10 flex flex-col items-start space-y-4">
          <div className="w-14 h-14  rounded-full flex justify-center items-center">
            <Image
              src={bank}
              alt="Bank Icon"
              width={50}
              height={50}
              className="object-cover rounded-lg shadow-2xl icon-left-1"
            />
          </div>
          <div className="w-14 h-14 rounded-full flex justify-center items-center">
            <Image
              src={analysis}
              alt="Analysis Icon"
              width={50}
              height={50}
              className="object-cover rounded-lg shadow-2xl icon-left-2"
            />
          </div>
        </div>
        <div className="absolute top-1/3 right-0 transform translate-x-5 z-10 flex flex-col items-end space-y-4">
          <div className="w-14 h-14  rounded-full flex justify-center items-center">
            <Image
              src={graph}
              alt="Graph Icon"
              width={50}
              height={50}
              className="object-cover rounded-lg shadow-2xl icon-right"
            />
          </div>
        </div>

        {/* Background SVG (Waves) */}
        <div
          ref={svgRef}
          className="absolute inset-0 w-full h-full -z-20 pointer-events-none"
        >
          <Image
            src={bg}
            alt="Background Waves"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <Image
            src={bg1}
            alt="Background Waves"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>

        {/* Main Image */}
        <Image
          src={conversation}
          alt="Technology"
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
