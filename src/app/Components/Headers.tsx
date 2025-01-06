
   
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Headers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-4 md:py-8 justify-between px-6 md:px-52 border-2 items-center">
      {/* Logo */}
      <div className="font-bold text-[24px] text-center md:text-left">
        Exclusive
      </div>

      {/* Navigation Links */}
      <div className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-5 text-[16px] md:text-[20px] font-semibold justify-center md:justify-start">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
          <li><Link href="/pageNotFound">Pages</Link></li>
        </ul>
      </div>

      {/* Search and User Section */}
      <div className="border-2 py-2 px-4 md:px-10 rounded-sm flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="What are you looking for? 🔍"
          className="w-full md:w-52 outline-none"
        />

        {/* Icons */}
        <div className="flex gap-4">
          <Image src="/Vector.png" alt="Search Icon" width={25} height={17.8} />
          <Image src="/Cart1 (1).png" alt="Cart Icon" width={25} height={20} />
        </div>

        {/* User Icon with Dropdown */}
        <div className="relative">
          <Image
            src="/user.png"
            alt="User Icon"
            width={32}
            height={32}
            className="cursor-pointer hover:bg-red-700 rounded-full"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-full md:w-60 h-auto rounded-lg shadow-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-600 text-white z-50">
              <ul className="py-1">
                <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Image
                    src="/user (1).png"
                    alt="Avatar"
                    width={32}
                    height={32}
                  />
                  <Link href="/myAccount">
                    <div className="text-sm font-bold">Manage My Account</div>
                  </Link>
                </div>
                <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Image
                    src="/icon-mallbag.png"
                    alt="Verified Icon"
                    width={28}
                    height={28}
                  />
                  <div className="text-sm font-bold">My Order</div>
                </div>
                <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Image
                    src="/icon-cancel.png"
                    alt="Verified Icon"
                    width={28}
                    height={28}
                  />
                  <div className="text-sm font-bold">My Cancellations</div>
                </div>
                <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Image
                    src="/Icon-Reviews.png"
                    alt="Verified Icon"
                    width={28}
                    height={28}
                  />
                  <div className="text-sm font-bold">My Reviews</div>
                </div>
                <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Image
                    src="/Icon-logout.png"
                    alt="Verified Icon"
                    width={28}
                    height={28}
                  />
                  <div className="text-sm font-bold">Logout</div>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headers;
