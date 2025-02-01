"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import tech1 from "@/public/assets/images/tech1.jpg";
import tech2 from "@/public/assets/images/tech2.jpg";
import tech3 from "@/public/assets/images/tech3.jpg";
import tech4 from "@/public/assets/images/tech4.jpg";
import Image from "next/image";
const FinanceSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [animationIndex, setAnimationIndex] = useState(null);
  const autoScrollRef = useRef(null);
  const gridItems = [
    "Customer focused",
    "Agile and Adaptable",
    "Compliance ready",
    "Secure and Safe",
  ];

  // Grid animation sequence
  useEffect(() => {
    if (hoveredItem !== null) {
      let i = hoveredItem;
      let cycleCount = 0;
      const interval = setInterval(() => {
        setAnimationIndex(i);
        i = (i + 1) % gridItems.length;
        if (i === hoveredItem) cycleCount++;
        if (cycleCount >= 3) clearInterval(interval);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [hoveredItem]);

  // Carousel auto-scroll
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (api) api.scrollNext();
      setCurrent((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(autoScrollRef.current);
  }, [api]);

  return (
    <div className="min-h-screen container mx-auto px-6 py-10">
      {/* Finance Grid Section */}
      <section className="text-center">
        <p className="text-blue-600 font-bold tracking-wider">
          TECHNOLOGY BUILT FOR YOU
        </p>
        <h2 className="my-5 text-blue-950 text-5xl font-bold">
          The future of finance
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {gridItems.map((text, index) => (
            <p
              key={index}
              className={`text-lg font-semibold px-6 py-3 rounded-full transition-all duration-500 cursor-pointer ${
                animationIndex === index
                  ? "bg-blue-400 text-white"
                  : "bg-white text-blue-500"
              }`}
              onMouseEnter={() => setHoveredItem(index)}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* Hero Section with Carousel */}
      <section className="mt-20 relative w-full max-w-5xl mx-auto text-center">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {[
              {
                title: "Customer Focused",
                text: "Purpose-built financial services.",
                description1:
                  "Elevate customer experience and achieve agile financial product innovation with the world first customer-focused financial services platform.",
                description2:
                  "Our platform is designed to help you deliver the best customer experience and drive growth.",
                image: tech1,
              },
              {
                title: "Agile and Adaptive",
                text: "Agile and Adaptable for Growth",
                description1:
                  "We take security seriously. Our platform is built with the latest security technology to protect your financial data.",
                description2:
                  "We are committed to keeping your data safe and secure. Our platform is designed to protect your financial information from unauthorized access.",
                image: tech3,
              },
              {
                title: "Compliance Ready",
                text: "Manage and track compliance.",
                description1:
                  "Our platform is designed to help you achieve your financial goals. We provide innovative solutions to simplify your financial journey.",
                description2:
                  "Our platform is built with the latest technology to help you manage your finances more effectively.",
                image: tech4,
              },
              {
                title: "Secure and Safe",
                text: "Highly secure and safe platform.",
                description1:
                  "Our platform is designed to help you achieve your financial goals. We provide innovative solutions to simplify your financial journey.",
                description2:
                  "Our platform is built with the latest technology to help you manage your finances more effectively.",
                image: tech2,
              },
            ].map((content, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-center justify-between p-6  rounded-lg shadow-md">
                  <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-left">
                    <p className="uppercase text-blue-500 font-bold">
                      {content.title}
                    </p>
                    <h3 className="text-4xl font-bold text-blue-900">
                      {content.text}
                    </h3>
                    <p className="mt-4 text-blue-950 font-bold ">
                      {content.description1}
                    </p>
                    <p className="mt-4 text-blue-950  ">
                      {content.description2}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Card>
                      <CardContent className="flex aspect-[4/3] items-center justify-center p-6">
                        <Image
                          src={content.image}
                          alt={content.title}
                          //   width={80}
                          //   height={50}
                          className="w-90 h-90 object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default FinanceSection;
