import React, { useState, useEffect } from "react";
import { FaGreaterThan, FaPlus } from "react-icons/fa";
import Image from "next/image"; // Corrected import
import bank1 from "../../../public/assets/images/partners/bank1.png";
import bank2 from "../../../public/assets/images/partners/bank2.png";
import bank3 from "../../../public/assets/images/partners/bank3.jpg";
import bank4 from "../../../public/assets/images/partners/bank4.png";
import bank5 from "../../../public/assets/images/partners/bank5.png";
import bank6 from "../../../public/assets/images/partners/bank6.png";
import bank7 from "../../../public/assets/images/partners/bank7.png";
import bank8 from "../../../public/assets/images/partners/bank8.png";
import bank9 from "../../../public/assets/images/partners/bank9.png";
import bank10 from "../../../public/assets/images/partners/bank10.jpg";
import bank11 from "../../../public/assets/images/partners/bank11.jpg";
import bank12 from "../../../public/assets/images/partners/bank12.png";
import bank13 from "../../../public/assets/images/partners/bank13.jpeg";
import bank14 from "../../../public/assets/images/partners/bank14.png";
import bank15 from "../../../public/assets/images/partners/bank15.jpg";

const StateSection = () => {
  const stats = [
    {
      label: "Years of Experience",
      limit: 20,
      prefix: <FaGreaterThan />,
      suffix: "",
    },
    {
      label: "Financial Institutions",
      limit: 40,
      prefix: "",
      suffix: <FaPlus />,
    },
    {
      label: "Customers Each",
      limit: 200,
      prefix: <FaGreaterThan />,
      suffix: "m",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.limit) {
            newCounts[index] += 5;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="min-h-screen container mx-auto my-16">
      <h2 className="text-center text-blue-600 font-bold text-lg uppercase tracking-wider">
        Trusted by the best
      </h2>
      <div className="flex flex-row justify-around mt-16 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md w-40 flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-7xl font-bold text-blue-600">
              {stat.prefix}
              {counts[index]}
              {stat.suffix}
            </div>
            <p className="mt-2 gap-2 text-gray-600 font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section className="grid grid-cols-5 gap-4 mt-16">
        {/* Updated images with consistent sizes and layout */}
        {[
          bank2,
          bank1,
          bank3,
          bank4,
          bank5,
          bank6,
          bank7,
          bank8,
          bank9,
          bank10,
          bank11,
          bank12,
          bank13,
          bank14,
          bank15,
        ].map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={src}
              width={200}
              height={100}
              alt={`bank${index + 1}`}
              className="object-contain"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default StateSection;
