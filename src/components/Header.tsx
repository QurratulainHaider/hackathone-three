"use client";
import { useState } from "react";
import Link from "next/link";
import { CiHeart, CiMail, CiShoppingCart } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Section: Contact Info */}
          <div className="flex items-center gap-8">
          <span className="flex items-center gap-[10px] pl-[24px]">
        <LuPhone /> +123 555 0199
      </span>
      <span className="flex items-center gap-[10px]">
        <CiMail /> michael.trees@example.com
      </span>
          </div>

          {/* Center Section */}
          <span className="text-sm">
            Follow us and get a chance to win 80% off
          </span>

          {/* Right Section: Follow Us */}
          <div className="flex items-center gap-[10px] pl-[24px]">
            <span className="hidden sm:inline">Follow us:</span>
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
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-center h-[70px] px-4">
          {/* Brand and Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#252B42]">
              Bandage
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-bold text-[#737373]">
                Home
              </Link>
              <Link href="/shop" className="text-sm font-bold text-[#737373]">
                Shop
              </Link>
              <Link href="/about" className="text-sm font-bold text-[#737373]">
                About
              </Link>
              <Link href="/blog" className="text-sm font-bold text-[#737373]">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-bold text-[#737373]">
                Contact
              </Link>
              <Link href="/shop" className="text-sm font-bold text-[#737373]">
                Pages
              </Link>
            </nav>
          </div>

          {/* Login, Cart, Heart, and Search */}
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden w-full flex items-center justify-between p-4">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px]">
          Bandage
        </h3>

        {/* Hamburger Icon */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute z-50 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}
      >
        <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
        </ul>

        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
