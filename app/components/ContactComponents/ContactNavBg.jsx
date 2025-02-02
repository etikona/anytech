"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import ContactForm from "./ContactForm";

const WaveLines1 = "/assets/backgrounds/WaveLinesDesktop1.svg";
const WaveLines2 = "/assets/backgrounds/WaveLinesDesktop2.svg";
const WaveLines3 = "/assets/backgrounds/WaveLinesDesktop3.svg";
const WaveLines4 = "/assets/backgrounds/WaveLinesDesktop4.svg";

const ContactNavBg = () => {
  const textRef = useRef(null);
  const waveRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power5.out" }
    );
  }, []);

  useEffect(() => {
    if (isHovered) {
      gsap.to(waveRef.current, {
        x: 15,
        y: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    } else {
      gsap.to(waveRef.current, {
        x: 20,
        y: 50,
        duration: 50,
      });
    }
  }, [isHovered]);

  return (
    <section
      className="relative flex flex-col lg:flex-row w-full min-h-[600px] items-center bg-gradient-to-r from-blue-600 to-blue-800 py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left-Aligned Text Content */}
      <div
        ref={textRef}
        className="w-full max-w-3xl px-8 lg:px-16 text-left z-10 text-white mb-12 lg:mb-0"
      >
        <h3 className="text-lg font-semibold text-teal-300 uppercase">
          Contact Us
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Let's <br /> Talk
        </h1>
        <p className="mt-4 text-xl">
          Have questions about building the next generation of banking
          experiences, our pricing, or our customer success stories?
        </p>
      </div>

      {/* Contact Form on the Right */}
      <div className="w-full lg:w-auto px-8 lg:px-16 z-10 lg:mr-16">
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 max-w-lg mx-auto lg:mx-0">
          <ContactForm />
        </div>
      </div>

      {/* Animated Wave Background */}
      <div
        ref={waveRef}
        className="absolute inset-0 w-full h-full bg-transparent"
      >
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
          className="opacity-70 pointer-events-auto"
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

export default ContactNavBg;
