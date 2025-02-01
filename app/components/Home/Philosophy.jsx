// pages/philosophy.js
import { motion } from "framer-motion";
import Image from "next/image";
const share = "/assets/icons/share.png";
const bulb = "/assets/icons/bulb.png";
const chip = "/assets/icons/chip.png";
const Philosophy = () => {
  return (
    <div className="container mx-auto">
      <section className="min-h-screen flex flex-col gap-9 md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 ">
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={share}
            alt="share"
            width={20}
            height={15}
            className="bg-blue-100 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Full-suite solutions
          </h3>
          <p className="text-lg text-blue-900 ">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={bulb}
            alt="share"
            width={20}
            height={15}
            className="bg-sky-200 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Simplify the complex
          </h3>
          <p className="text-lg text-blue-900 ">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={chip}
            alt="share"
            width={20}
            height={15}
            className="bg-pink-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Cutting-edge tech
          </h3>
          <p className="text-lg text-blue-900 ">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Philosophy;
