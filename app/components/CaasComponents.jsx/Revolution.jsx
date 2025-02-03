"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const rocket = "/assets/icons/rocket.png";
const profit = "/assets/icons/profits.png";
const arrow = "/assets/icons/up-arrow.png";
const people = "/assets/icons/people.png";
const bulb = "/assets/icons/bulb.png";

const Revolution = () => {
  return (
    <div className="container mx-auto py-12">
      <section className="py-16">
        <p className="text-lg text-center text-green-600 font-bold uppercase">
          Benefits
        </p>
        <h2 className="text-4xl text-center text-blue-950 font-bold">
          Revolutionize your card programmes
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
              Speed to Market
            </h3>
            <p className="text-lg text-blue-900">
              Launch new card programmes with ease and enjoy a competitive
              advantage via a faster time-to-market.
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
              Eliminate the hefty upfront investments associated with
              traditional card issuance systems. Pay as you grow with our CaaS
              model, aligning costs with the scale of your operations.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={arrow}
              alt="arrow"
              width={20}
              height={20}
              className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">Scalability</h3>
            <p className="text-lg text-blue-900">
              AnyTech’s scalable architecture is built to support a constantly
              growing customer base and an evolving portfolio of products and
              services.
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
              Improve customer satisfaction with instant card issuance,
              personalized card designs, and real-time transaction monitoring.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
            <Image
              src={bulb}
              alt="bulb"
              width={20}
              height={20}
              className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
            />
            <h3 className="text-2xl text-blue-950 font-bold">Innovation</h3>
            <p className="text-lg text-blue-900">
              Stay ahead of the competition by leveraging our continuous
              innovation, from contactless cards to mobile wallet integrations.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Revolution;
