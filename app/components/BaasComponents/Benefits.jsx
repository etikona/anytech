"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const rocket = "/assets/icons/rocket.png";
const profit = "/assets/icons/profits.png";
const building = "/assets/icons/bank-building.png";
const people = "/assets/icons/people.png";
const medal = "/assets/icons/medal.png";

const Benefits = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <section className="py-16">
        <p className="text-lg text-center text-purple-600 font-bold uppercase">
          benefits
        </p>
        <h2 className="text-4xl text-center text-blue-950 font-bold">
          Start your digital transformation
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-6 md:px-16 lg:px-24">
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={rocket}
              alt="rocket"
              width={20}
              height={25}
              className="bg-green-100 p-2 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">
              Agility & Speed
            </h3>
            <p className="text-lg text-blue-900">
              Adapt quickly to market changes, launch innovative products, and
              offer real-time services to your customers. AnyBaaS reduces the
              time-to-market for new offerings and services, providing you with
              a competitive edge.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={profit}
              alt="profits"
              width={20}
              height={20}
              className="bg-green-100 p-2 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">Cost-effective</h3>
            <p className="text-lg text-blue-900">
              Reduce your operational costs by leveraging our scalable
              infrastructure and eliminating the need for heavy upfront
              investments in technology development and maintenance.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={building}
              alt="arrow"
              width={20}
              height={20}
              className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">Scalability</h3>
            <p className="text-lg text-blue-900">
              AnyBaaS enables you to harness the power of digital transformation
              and fintech innovation, allowing you to stay ahead of the
              competition and meet the evolving needs of your customers.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={people}
              alt="people"
              width={20}
              height={20}
              className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">
              Customer Experience
            </h3>
            <p className="text-lg text-blue-900">
              With a focus on digital-first services, our platform helps you
              deliver superior, personalized banking experiences to your
              customers, increasing loyalty and satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={medal}
              alt="bulb"
              width={20}
              height={20}
              className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">
              Regulatory Compliance
            </h3>
            <p className="text-lg text-blue-900">
              Our built-in compliance tools help you navigate complex regulatory
              landscapes with ease, ensuring your services meet all legal and
              regulatory requirements.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Benefits;
