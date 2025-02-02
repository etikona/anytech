import React, { useRef } from "react";
import frame from "@/public/assets/frames/content-image-1.png";
import Image from "next/image";
import analysis from "@/public/assets/icons/analysis.png";
import graph from "@/public/assets/icons/graph.png";
import consult from "@/public/assets/images/partners/consult.jpg";
import WaveLines1 from "@/public/assets/backgrounds/WaveLinesDesktop1.svg";
// import { Button } from "@/components/ui/button";
const WaveLines2 = "/assets/backgrounds/WaveLinesDesktop2.svg";
const WaveLines3 = "/assets/backgrounds/WaveLinesDesktop3.svg";
const WaveLines4 = "/assets/backgrounds/WaveLinesDesktop4.svg";
import arrow from "@/public/assets/icons/arrow.png";
const Consult = () => {
  // Adding refs for images and wave backgrounds
  const imageContainerRef = useRef(null);
  const svgRef = useRef(null);
  const waveRef = useRef(null);

  return (
    <div>
      <section id="consult" className="">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden">
          <div className="z-10 max-w-2xl text-left space-y-6">
            <p className="font-bold text-blue-600 uppercase">
              Taking the First Step
            </p>
            <h1 className="text-5xl md:text-5xl font-semibold text-blue-950">
              Consult
            </h1>
            <p className="text-lg font-bold text-blue-950">
              Taking the leap towards digital transformation with the ambition
              of delivering augmented value in financial services can be
              daunting.
            </p>
            <p className="text-lg text-blue-950">
              Tap on the vast experience and deep knowledge of our experts. Our
              breadth of consulting expertise spans from applying the latest
              financial technological innovations to implementing risk-control
              strategies.
            </p>
          </div>

          <div
            ref={imageContainerRef}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            {/* Icons positioned on the image with round gradient backgrounds */}
            <div className="absolute top-1/3 left-0 transform translate-x-5 z-10 flex flex-col items-start space-y-4">
              <div className="w-14 h-14 rounded-full flex justify-center items-center">
                <Image
                  src={graph}
                  alt="Bank Icon"
                  width={50}
                  height={50}
                  className="bg-gradient-to-r from-gray-100 via-blue-100 to-slate-100 p-2 rounded-full"
                />
              </div>
            </div>
            <div className="absolute top-1/3 right-0 transform translate-x-5 z-10 flex flex-col items-end space-y-4">
              <div className="w-14 h-14 rounded-full flex justify-center items-center">
                <Image
                  src={analysis}
                  alt="Graph Icon"
                  width={50}
                  height={50}
                  className="bg-gradient-to-r from-gray-200 via-red-100 to-yellow-100 p-2 rounded-full"
                />
              </div>
            </div>

            {/* Background SVG (Waves) */}
            <div
              ref={svgRef}
              className="absolute inset-0 w-full h-full -z-20 pointer-events-none"
            >
              <Image
                src={frame} // Ensure the path is correct
                alt="Background Waves"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Main Image */}
            <Image
              src={consult}
              alt="Consultation Image"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="flex flex-row rounded-xl bg-gradient-to-r from-blue-400 to-blue-800 md:flex-row items-center justify-between p-6 md:px-16 lg:px-24 relative">
          <div>
            <h2 className="text-4xl text-white font-bold">
              Start your transformation
            </h2>
            <p className="text-lg text-slate-200">
              We are ready to serve as strategic partners to provide your
              organisation with <br /> the support you need.
            </p>
          </div>
          <div className="bg-orange-600 flex items-center text-white text-lg p-2 rounded cursor-pointer transform-3d transition-transform duration-300 hover:translate-x-2">
            <p className="transition-transform duration-300 hover:translate-x-2">
              Talk to us
            </p>
            <Image
              src={arrow}
              width={20}
              height={20}
              alt="right arrow"
              className="ml-2 transition-transform duration-300 hover:translate-x-2"
            />
          </div>
          <div ref={waveRef} className="absolute inset-0 w-full h-full -z-10">
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
        </div>
      </section>
    </div>
  );
};

export default Consult;
