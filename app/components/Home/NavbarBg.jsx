"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const WaveLines1 = "/assets/backgrounds/WaveLinesDesktop1.svg";
const WaveLines2 = "/assets/backgrounds/WaveLinesDesktop2.svg";
const WaveLines3 = "/assets/backgrounds/WaveLinesDesktop3.svg";
const WaveLines4 = "/assets/backgrounds/WaveLinesDesktop4.svg";
const female = "/assets/images/female.jpg";
import arrow from "@/public/assets/icons/arrow.png";
const NavbarBgSection = () => {
  const textRef = useRef(null);
  const waveRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate text appearance
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power5.out" }
    );
  }, []);

  useEffect(() => {
    if (isHovered) {
      gsap.to(waveRef.current, {
        x: 15, // Tilt effect along the X-axis
        y: 10, // Tilt effect along the Y-axis
        duration: 6,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation on every iteration
        ease: "sine.inOut", // Smooth easing for tilt
      });
    } else {
      // Reset the tilt effect when the mouse leaves
      gsap.to(waveRef.current, {
        x: 20,
        y: 50,
        duration: 50, // Smooth transition back
      });
    }
  }, [isHovered]);

  return (
    <section
      className="relative flex w-full h-[400px] md:h-[500px] lg:h-[600px] items-center bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} // Reset tilt when mouse leaves
    >
      {/* Left-Aligned Text Content */}
      <div
        ref={textRef}
        className="w-full max-w-3xl px-8 lg:px-16 text-left z-10 text-white"
      >
        <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Embracing the future of finance
        </h1>
        <p className="mt-4 text-xl">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <div className="bg-orange-600 w-1/3 mt-3 flex items-center text-white text-lg p-2 rounded cursor-pointer transform-3d transition-transform duration-300 ">
          <p className="transition-transform duration-300 hover:translate-x-2">
            Reach out to us
          </p>
          <Image
            src={arrow}
            width={20}
            height={20}
            alt="right arrow"
            className="ml-2 transition-transform duration-300 hover:translate-x-2"
          />
        </div>
      </div>
      <div className="">
        <Image
          src={female}
          alt="Professional Female"
          width={700}
          height={900}
          className="bottom-0 object-cover translate-1/2"
        />
      </div>

      {/* Animated Wave Background */}
      <div ref={waveRef} className="absolute inset-0 w-full h-full ">
        <Image
          src={WaveLines1}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70 pointer-events-auto"
        />
        <Image
          src={WaveLines2}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70 pointer-events-auto "
        />
        <Image
          src={WaveLines3}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70 pointer-events-auto"
        />
        <Image
          src={WaveLines4}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70 pointer-events-auto"
        />
      </div>
    </section>
  );
};

export default NavbarBgSection;
