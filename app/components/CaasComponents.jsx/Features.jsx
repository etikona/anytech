"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const user = "/assets/icons/user.png";
const puzzel = "/assets/icons/puzzel.png";
const card = "/assets/icons/card.png";
const line = "/assets/icons/line-chart.png";
const hacker = "/assets/icons/hacker.png";
const secure = "/assets/icons/hacker.png";
const Feature = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <p className="text-lg text-center text-green-600 font-bold uppercase">
        Key Features
      </p>
      <h2 className="text-4xl text-center text-blue-950 font-bold ">
        Superior customer experiences
      </h2>
      <section className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={user}
            alt="user"
            width={20}
            height={25}
            className="bg-green-100 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Easy Card Issuance & Management
          </h3>
          <p className="text-lg text-blue-900 ">
            Issue and manage all types of payment cards, including debit,
            credit, prepaid, and virtual cards via a unified platform. Easily
            configure card rules, limits, and policies per your business needs.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={puzzel}
            alt="puzzel"
            width={20}
            height={20}
            className="bg-green-100 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Flexible API Integration
          </h3>
          <p className="text-lg text-blue-900 ">
            Our robust APIs ensure seamless integration with your existing
            infrastructure, enabling real-time data exchange and cross-platform
            compatibility.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={card}
            alt="card"
            width={20}
            height={20}
            className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Customizable Card Design
          </h3>
          <p className="text-lg text-blue-900 ">
            Leverage our platform to create unique card designs that reflect
            your brand identity.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={line}
            alt="line"
            width={20}
            height={20}
            className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Real-time Reporting & Analytics
          </h3>
          <p className="text-lg text-blue-900 ">
            Track and analyse card transactions in real-time with our intuitive
            dashboard and reporting features. Gain insights into customer
            spending patterns and card usage trends.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={hacker}
            alt="hacker"
            width={20}
            height={20}
            className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Fraud Detection & Prevention
          </h3>
          <p className="text-lg text-blue-900 ">
            Our advanced AI-driven fraud detection system monitors card
            transactions around the clock, providing instant alerts on
            suspicious activities and helping to prevent fraudulent
            transactions.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={secure}
            alt="secure"
            width={20}
            height={20}
            className="bg-green-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Secure & Compliant
          </h3>
          <p className="text-lg text-blue-900 ">
            AnyTech adheres to the highest level of data security standards and
            is fully compliant with PCI DSS, GDPR, and other relevant
            regulations.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Feature;
