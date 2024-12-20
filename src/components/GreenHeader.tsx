"use client";
import Link from "next/link";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { CiHeart, CiMail, CiShoppingCart } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Green Header */}
      <div className="bg-[#23856d] text-white py-2 px-4 md:px-8 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            {/* Phone Icon */}
            <LuPhone />
            (225) 555-0118
          </span>
          <span className="flex items-center gap-2">
            {/* Email Icon */}
            <CiMail />
            michael.trees@example.com
          </span>
        </div>
        
        {/* Center Section */}
        <span className="text-sm">
            Follow us and get a chance to win 80% off
          </span>

           {/* Right Section: Follow Us */}
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">Follow us:</span>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-500"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-[91px] px-4 md:px-8">
        <nav className="w-full h-full flex justify-between items-center">
          {/* Brand Section */}
          <div className="text-[#23856d] font-bold text-[24px] leading-[32px]">
            Bandage
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link legacyBehavior href="/">
                  <a className="font-semibold text-sm text-[#737373]">Home</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/about">
                  <a className="font-semibold text-sm text-[#737373]">About</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a className="font-semibold text-sm text-[#737373]">Services</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a className="font-semibold text-sm text-[#737373]">Contact</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/shop">
                  <a className="font-semibold text-sm text-[#737373]">Pages</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Login & Button Section */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold text-[#23A6F0]">
              Login / Register
            </Link>
          <div className="flex items-center gap-4">
              {/* Magnifying Icon */}
              <button className="text-[#5abcf4] hover:text-red-500">
                <HiMagnifyingGlass size={20} />
              </button>

              {/* Cart Icon */}
              <button className="text-[#5abcf4] hover:text-green-500">
                <CiShoppingCart size={20} />
              </button>

              {/* Heart Icon */}
              <button className="text-[#5abcf4] hover:text-red-500">
                <CiHeart size={20} />
              </button>
            </div>
            </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#252B42]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[91px] left-0 right-0 p-4">
          <ul className="space-y-4">
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="font-semibold text-sm text-[#737373]">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
