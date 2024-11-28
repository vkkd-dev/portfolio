"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-primary fixed lg:hidden top-5 left-3 z-50 rounded-full p-1.5"
      onClick={toggleMenu}
    >
      <Image src="/icons/open.svg" width={24} height={24} alt="menu" />

      {/* Full-Screen Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center space-y-6 
          transform transition-transform duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Close Button */}

          <div className="bg-white fixed lg:hidden top-5 left-3 z-50 rounded-full p-1.5">
            <Image
              src="/icons/close.svg"
              width={24}
              height={24}
              alt="menu"
              onClick={toggleMenu}
            />
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col items-center text-white text-2xl font-semibold space-y-10">
            <Link href="#" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Portfolio
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
