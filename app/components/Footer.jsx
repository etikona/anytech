import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#051733] mt-20 mb-0">
      {/* Top Section */}
      <div className="container mx-auto px-4 lg:px-10 py-10 border-b border-blue-800">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo */}
          <div>
            <h1 className="text-white font-bold text-2xl">ANYTECH</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-teal-300 font-medium">
            <a href="#our-solutions" className="hover:underline">
              Our Solutions
            </a>
            <span className="text-gray-500">|</span>
            <a href="/caas" className="hover:underline">
              AnyCaaS
            </a>
            <a href="/baas" className="hover:underline">
              AnyBaaS
            </a>
            <a href="/paas" className="hover:underline">
              AnyPaaS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#021021]">
        <div className="container mx-auto px-4 lg:px-10 py-4 flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
          <p className="text-sm text-white text-center lg:text-left">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <a
            href="#privacy-policy"
            className="text-blue-500 hover:underline text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
