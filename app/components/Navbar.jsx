"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
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
  const [selectedLang, setSelectedLang] = useState("en");
  const router = useRouter();

  const handleLangChange = (code) => {
    setSelectedLang(code);
    router.push(`/${code}`); // Simulate language switch
    setIsDropdownOpen(false);
  };

  return (
    <nav className="relative z-50 w-full p-4 bg-gradient-to-r from-blue-600 to-blue-800 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">AnyTech</Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li
            className="relative cursor-pointer"
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
                  <li className="p-2 hover:bg-gray-100">AnyCaaS</li>
                  <li className="p-2 hover:bg-gray-100">AnyBaaS</li>
                  <li className="p-2 hover:bg-gray-100">AnyPaaS</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/Services">services</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About Us</Link>
          </li>
        </ul>

        {/* Language Selector & Contact Button */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center text-white"
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
                      onClick={() => handleLangChange(lang.code)}
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
            className="text-gray-50 border-neutral-50 bg-none px-4 py-2 rounded-md shadow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
