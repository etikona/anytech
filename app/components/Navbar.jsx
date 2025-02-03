"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const languages = [
  { code: "en", label: "English" },
  { code: "th", label: "Thai" },
  { code: "id", label: "Indonesian" },
  { code: "tw", label: "Taiwanese" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (!isWhiteBgPage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isWhiteBgPage = ["/caas", "/baas", "/paas"].includes(pathname);
  const navbarBg =
    isWhiteBgPage || isScrolled
      ? "bg-white"
      : "bg-gradient-to-r from-blue-600 to-blue-800";
  const textColor =
    isWhiteBgPage || isScrolled ? "text-blue-800" : "text-white";
  const underlineColor =
    isWhiteBgPage || isScrolled ? "after:bg-blue-800" : "after:bg-white";

  return (
    <nav
      className={`fixed z-50 w-full p-4 ${navbarBg} shadow-sm transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className={`font-bold text-2xl ${textColor}`}>
          <Link href="/">AnyTech</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${textColor}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`hidden md:flex space-x-8 font-medium ${textColor}`}>
          <li
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <span className="flex items-center">
              Solutions <ChevronDown size={16} className="ml-1" />
            </span>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-md rounded-md"
                >
                  <Link href="/caas" className="block p-2 hover:bg-gray-100">
                    AnyCaaS
                  </Link>
                  <Link href="/baas" className="block p-2 hover:bg-gray-100">
                    AnyBaaS
                  </Link>
                  <Link href="/paas" className="block p-2 hover:bg-gray-100">
                    AnyPaaS
                  </Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {[
            { href: "/services", label: "Services" },
            { href: "/about", label: "About Us" },
          ].map((item) => (
            <li
              key={item.href}
              className={`cursor-pointer relative group ${textColor}`}
            >
              <Link href={item.href} className="hover:underline">
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${underlineColor}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Selector & Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              className={`flex items-center ${textColor}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Globe className="mr-1" /> {selectedLang.toUpperCase()}{" "}
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-32 bg-white text-gray-800 shadow-md rounded-md"
                >
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setSelectedLang(lang.code)}
                    >
                      {lang.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-md shadow transition-all duration-300 ${
              isWhiteBgPage || isScrolled
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border border-white text-white bg-transparent hover:bg-white hover:text-blue-800"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 space-y-4 text-center ${textColor}`}
          >
            <Link href="/Services" className="block hover:underline">
              Services
            </Link>
            <Link href="/about" className="block hover:underline">
              About Us
            </Link>
            <Link href="/caas" className="block hover:underline">
              AnyCaaS
            </Link>
            <Link href="/baas" className="block hover:underline">
              AnyBaaS
            </Link>
            <Link href="/paas" className="block hover:underline">
              AnyPaaS
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 rounded-md ${
                isWhiteBgPage || isScrolled
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border border-white text-white bg-transparent hover:bg-white hover:text-blue-800"
              }`}
            >
              Contact Us
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
