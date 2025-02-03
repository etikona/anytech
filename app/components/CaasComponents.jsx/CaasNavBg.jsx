"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const WaveLines2 = "/assets/backgrounds/WaveLinesDesktop2.svg";

const WaveLines4 = "/assets/backgrounds/WaveLinesDesktop4.svg";

const CaasNavBg = () => {
  const textRef = useRef(null);
  const waveRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } // Smoother easing
    );
  }, []);

  useEffect(() => {
    gsap.to(waveRef.current, {
      scale: isHovered ? 1.02 : 1, // Reduced scale change for smoother effect
      rotation: isHovered ? 1 : 0, // Minimal rotation
      duration: 2.5, // Slightly slower duration
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // Softer easing
    });
  }, [isHovered]);

  return (
    <section
      className="relative flex w-full h-[400px] md:h-[500px] lg:h-[600px] items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={textRef}
        className="w-full max-w-3xl px-8 lg:px-16 text-left z-10 text-black"
      >
        <h3 className="text-lg font-semibold text-blue-600">our solutions</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-600">
          Robust card issuance <br />
          and management
        </h1>
        <p className="mt-4 w-2/4  text-xl bg-gradient-to-r from-green-500  to-blue-500 p-2 rounded-full text-white font-bold text-center">
          AnyCaas BY AnyTech
        </p>
      </div>

      <div
        ref={waveRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-green-300"
      >
        <Image
          src={WaveLines4}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90 pointer-events-none"
        />
        <Image
          src={WaveLines2}
          alt="Wave Lines Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default CaasNavBg;
