"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import bg from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
import bg1 from "@/public/assets/backgrounds/WaveLinesDesktop2.svg";

import analysis from "@/public/assets/icons/analysis.png";
import graph from "@/public/assets/icons/graph.png";
import conversation from "@/public/assets/images/conversation.jpg";

gsap.registerPlugin(ScrollTrigger);

const Operate = () => {
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
    <div id="operate">
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Left: Text Section */}
        <div className="z-10 max-w-2xl text-left space-y-6">
          <p className=" font-bold text-blue-600 uppercase">
            long-term efficiency
          </p>
          <h1 className="text-5xl md:text-5xl font-semibold text-blue-950">
            Operate
          </h1>
          <p className="text-lg font-bold text-blue-950">
            Setting up operational efficiencies to deliver the promised value to
            your customers is pivotal to long-term growth.
          </p>
          <p className="text-lg text-blue-950">
            We provide a full suite of operational and support services that
            continue throughout the product life cycle.
          </p>
          <p className="text-lg text-blue-950">
            Continually drive success with our dedicated experts who are ready
            to assist you at every step of the way.
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
                src={graph}
                alt="Bank Icon"
                width={50}
                height={50}
                className="bg-gradient-to-r from-gray-100 via-blue-100 to-slate-100 p-2 rounded-full icon-left-1"
              />
            </div>
          </div>
          <div className="absolute top-1/3 right-0 transform translate-x-5 z-10 flex flex-col items-end space-y-4">
            <div className="w-14 h-14  rounded-full flex justify-center items-center">
              <Image
                src={analysis}
                alt="Graph Icon"
                width={50}
                height={50}
                className="  bg-gradient-to-r from-gray-200 via-red-100 to-yellow-100 p-2 rounded-full icon-right"
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
      <div className="grid grid-cols-3 gap-4 h-1/2">
        <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 bg-sky-50 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
          <Image
            src=""
            alt="share"
            width={20}
            height={20}
            className="bg-sky-200 p-2 w-12 h-12 rounded-full"
          />
          <h3 className="text-2xl text-blue-950 font-bold text-start ">
            Operational Support
          </h3>
          <p className="text-lg text-blue-900  text-start">
            Deploy our team to manage and maintain your AnyTech solutions so
            that you can focus on your core business and strategic initiatives.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 bg-sky-50 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
          <Image
            src=""
            alt="share"
            width={20}
            height={20}
            className="bg-sky-200 p-2 w-12 h-12 rounded-full"
          />
          <h3 className="text-2xl text-blue-950 font-bold text-start ">
            Personalized Services
          </h3>
          <p className="text-lg text-blue-900  text-start">
            From developing new business opportunities to running backend IT
            maintenance, our team can also provide any other support you
            require.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 border-2 border-blue-100 bg-sky-50 transition-colors duration-300 rounded-xl w-full md:w-96 h-96 cursor-pointer">
          <Image
            src=""
            alt="share"
            width={20}
            height={20}
            className="bg-sky-200 p-2 w-12 h-12 rounded-full"
          />
          <h3 className="text-2xl text-blue-950 font-bold text-start ">
            24/7 Technical Support
          </h3>
          <p className="text-lg text-blue-900  text-start">
            Our customer success team is available around the clock to address
            your enquiries and resolve any issues that may arise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Operate;
