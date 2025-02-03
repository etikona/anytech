// import { Link } from "lucide-react";
"use client";
import React from "react";

import Link from "next/link";

const Solutions = () => {
  return (
    <div className="container mx-auto py-12">
      <p className=" font-bold text-purple-600 text-center uppercase">
        Solutions
      </p>
      <h1 className="text-5xl md:text-5xl font-semibold text-center text-blue-950">
        Designed for your needs
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          href="/caas"
          className="hover:border-2 hover:border-purple-800 px-2 pb-3 my-8 hover:shadow-lg hover:rounded-xl"
        >
          <h2 className="text-5xl md:text-3xl font-semibold text-blue-950  py-8">
            Robust card issuance and management
          </h2>
          <p className="text-lg text-blue-600 text-start">
            Re-imagine your card programmes with our
            <span className="font-bold">Cards-as-a-service(Caas)</span>
            solutions. Deliver exceptional card experiences with our end-to-end
            card management platform that is secure, scalable and flexible.
          </p>
          <p className="border border-sky-700 mt-3  w-2/3 text-center rounded-full text-lg text-sky-500 p-2">
            AnyCaas BY AnyTech
          </p>
        </Link>
        <Link
          href="/paas"
          className="hover:border-2 hover:border-sky-800 px-2 pb-3 my-8 hover:shadow-lg hover:rounded-xl"
        >
          <h2 className="text-5xl md:text-3xl font-semibold text-blue-950  py-8">
            High-velocity payment processing
          </h2>
          <p className="text-lg text-blue-600 text-start">
            Enhance your payment processing capabilities with our
            <span className="font-bold">Payment-as-a-service(Paas)</span>{" "}
            solutions. Experience faster, more secure and reliable payment
            processing that scales with your business.
          </p>
          <p className="border border-sky-700 mt-3  w-2/3 text-center rounded-full text-lg text-sky-500 p-2">
            AnyPaas BY AnyTech
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
