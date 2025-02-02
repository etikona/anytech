import React from "react";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-4xl text-blue-900 font-bold mb-8">
        Our Solutions
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5 p-8 gradient-border drop-shadow-xl rounded-xl cursor-pointer">
          <p className="text-3xl gradient-text">AnyCaaS</p>
          <p className="text-gray-700 leading-relaxed">
            Reimagine your card programmes with our
            <span className="font-bold">Cards-as-a-Service (CaaS)</span>
            solution. Streamline card management, deliver innovative card
            experiences, and enhance customer satisfaction with our cutting-edge
            technology.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 gradient-border drop-shadow-xl rounded-xl cursor-pointer">
          <p className="text-3xl gradient-text">AnyBaaS</p>
          <p className="text-gray-700 leading-relaxed">
            Drive into the future of banking with our
            <span className="font-bold">Banking-as-a-service</span>
            platform that gives you the tools you need to adapt and scale in
            todays fast-paced digital environment.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 gradient-border drop-shadow-xl rounded-xl cursor-pointer">
          <p className="text-3xl gradient-text">AnyPaaS</p>
          <p className="text-gray-700 leading-relaxed">
            Enhance your payment processing capabilities with our
            <span className="font-bold">Payment-as-a-Service (PaaS)</span>
            solution. Experience scalable and secure infrastructure that handles
            transactions with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
