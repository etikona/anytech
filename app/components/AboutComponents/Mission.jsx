import React from "react";
import Image from "next/image";
import WaveLines1 from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLines2 from "@/public/assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLines3 from "@/public/assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLines4 from "@/public/assets/backgrounds/WaveLinesDesktop4.svg";

const Mission = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Section Header */}
      <p className="text-center text-blue-500 uppercase font-semibold tracking-widest mb-2">
        Our Mission
      </p>
      <h2 className="text-center text-4xl md:text-5xl text-blue-950 font-extrabold mb-8">
        Redefining Tomorrow
      </h2>

      {/* Mission Card */}
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl overflow-hidden">
          {/* Wave Backgrounds */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={WaveLines1}
              alt="Wave Line 1"
              layout="fill"
              objectFit="cover"
              className="opacity-30 blur-sm"
            />
            <Image
              src={WaveLines2}
              alt="Wave Line 2"
              layout="fill"
              objectFit="cover"
              className="opacity-25 blur-md"
            />
            <Image
              src={WaveLines3}
              alt="Wave Line 3"
              layout="fill"
              objectFit="cover"
              className="opacity-20 blur-sm"
            />
            <Image
              src={WaveLines4}
              alt="Wave Line 4"
              layout="fill"
              objectFit="cover"
              className="opacity-15 blur-sm"
            />
          </div>

          {/* Mission Content */}
          <h3 className="text-teal-300 text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
            Our Vision
          </h3>
          <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed md:leading-snug">
            To redefine global finance by empowering institutions with
            technology that drives value and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
