import React from "react";

const Footer = () => {
  return (
    <div>
      <section>
        <footer className="bg-[#051733]">
          {/* Top Section */}
          <div className="flex justify-between items-center px-10 py-20 border-b border-blue-800">
            {/* Logo */}
            <div>
              <h1 className="text-white font-bold text-2xl">ANYTECH</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6 text-teal-300 font-medium">
              <a href="#our-solutions" className="hover:underline">
                Our Solutions
              </a>
              <span className="text-gray-500 text-base/7">|</span>
              <a href="#anycaas" className="hover:underline">
                AnyCaaS
              </a>
              <a href="#anybaas" className="hover:underline">
                AnyBaaS
              </a>
              <a href="#anypaas" className="hover:underline">
                AnyPaaS
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-[#021021] flex justify-between items-center px-6 py-3">
            <p className="text-sm text-white">
              ©2023 All rights reserved. Any Technology Pte Ltd.
            </p>
            <a
              href="#privacy-policy"
              className="text-blue-500 hover:underline text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
