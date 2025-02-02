import Image from "next/image";
import React from "react";
import frame from "@/public/assets/frames/story/1.png";
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
import "./Empower.css";
const logos = [
  bank1,
  bank2,
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
];
const Empower = () => {
  return (
    <div className=" container mx-auto min-h-screen">
      <section className="mt-20 flex flex-col shadow p-3">
        <div className="grid grid-cols-2 w-2">
          <Image src={frame} width={12} height={12} alt="frame" />
        </div>
        <div>
          <h2 className="text-start text-4xl font-bold text-blue-950">
            Empowering more than{" "}
            <span className="text-blue-500">40 financial institutions</span> to{" "}
            <br />
            transform in a digital-first world.
          </h2>
        </div>
      </section>
      <div className="scroll-container">
        <div className="scroll-content">
          {logos.concat(logos).map((logo, index) => (
            <div key={`logo-${index}`} className="logo-container">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="logo"
                width={150}
                height={100}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empower;
