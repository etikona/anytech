"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const share = "/assets/icons/share.png";
const building = "/assets/icons/bank-building.png";
const transaction = "/assets/icons/transaction.png";
const medal = "/assets/icons/medal.png";
const bot = "/assets/icons/bot.png";
const lock = "/assets/icons/lock.png";

const Redefined = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <p className="text-lg text-center text-violet-600 font-bold uppercase">
        Key Features
      </p>
      <h2 className="text-4xl text-center text-blue-950 font-bold ">
        Redefined for the digital age
      </h2>
      <section className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={share}
            alt="share"
            width={20}
            height={25}
            className="bg-violet-100 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Seamless API Integration
          </h3>
          <p className="text-lg text-blue-900 ">
            AnyBaaS provides a suite of robust APIs, allowing seamless
            integration with existing systems and enabling the rapid launch of
            new banking services and products.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={building}
            alt="building"
            width={20}
            height={20}
            className="bg-violet-100 p-2 w-9 h-9 rounded-full "
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
            src={transaction}
            alt="transaction"
            width={20}
            height={20}
            className="bg-violet-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            White-labelled Solutions
          </h3>
          <p className="text-lg text-blue-900 ">
            Our platform supports the deployment of white-label solutions such
            as mobile banking, digital wallets, lending platforms, and payment
            gateways, all under your own brand.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={medal}
            alt="medal"
            width={20}
            height={20}
            className="bg-violet-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Real-time Transaction Processing
          </h3>
          <p className="text-lg text-blue-900 ">
            AnyBaaS enables real-time processing of transactions, enhancing
            operational efficiency and customer satisfaction.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={bot}
            alt="bot"
            width={20}
            height={20}
            className="bg-violet-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            Comprehensive Compliance Tools
          </h3>
          <p className="text-lg text-blue-900 ">
            Our platform includes built-in tools to ensure compliance with
            regulatory requirements, including KYC, AML, CDD, and GDPR.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={lock}
            alt="lock"
            width={20}
            height={20}
            className="bg-violet-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">
            AI-Powered Analytics & Risk Management
          </h3>
          <p className="text-lg text-blue-900 ">
            Leverage our advanced analytics for risk management, fraud
            detection, and customer insight generation, powered by cutting-edge
            artificial intelligence and machine learning technologies.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Redefined;
