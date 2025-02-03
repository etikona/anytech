"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import bg from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
import bg1 from "@/public/assets/backgrounds/WaveLinesDesktop2.svg";

import analysis from "@/public/assets/icons/analysis.png";
import graph from "@/public/assets/icons/graph.png";
import stock from "@/public/assets/images/stock.jpg";

gsap.registerPlugin(ScrollTrigger);

const BaasHero = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const svgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Background Animation (Appears Once)
    if (isHovered) {
      gsap.to(svgRef.current, {
        x: 15,
        y: 10,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    } else {
      // Reset the tilt effect when the mouse leaves
      gsap.to(imageContainerRef.current, {
        x: 2,
        y: 5,
        duration: 5,
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
      y: "-20px",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 0.2,
    });

    gsap.to(".icon-left-2", {
      y: "-25px",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 0.4,
    });

    gsap.to(".icon-right", {
      y: "-30px",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 0.6,
    });
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Left: Text Section */}
        <div className="z-10 max-w-2xl text-left space-y-6">
          <p className=" font-bold text-pink-600 uppercase">Anybaas</p>
          <h2 className="text-5xl md:text-5xl font-semibold text-blue-950">
            The future of banking
          </h2>
          <p className="text-lg font-bold text-blue-950">
            Engineered to revolutionize the way large financial institutions
            operate and serve their customers, our
            <span className="text-blue-500">
              {" "}
              Banking-as-a-Service (BaaS)
            </span>{" "}
            solution redefines banking infrastructure.
          </p>
          <p className="text-lg text-blue-950">
            Designed by our expert team, AnyBaaS provides powerful
            infrastructure that allows banks to innovate, scale, and adapt in
            today's fast-paced digital environment.
          </p>
          <p className="text-lg text-blue-950">
            AnyBaaS is more than just a platform—it's a strategic partner in
            your digital transformation journey. Embrace the future of banking
            with AnyTech and redefine what your institution can achieve in the
            digital age.
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

          <Image
            src={stock}
            alt="Stock"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BaasHero;
