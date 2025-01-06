
 

"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 justify-between px-6 sm:px-12 md:px-52 border-2">
      <div className="font-bold text-[24px] text-center md:text-left">
        Exclusive
      </div>
      <div className="flex flex-col md:flex-row gap-5 text-[20px] font-semibold text-center md:text-left">
        <ul className="flex gap-5 text-[20px] font-semibold">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/pageNotFound">Pages</Link></li>
        </ul>
      </div>
      <div className="border-2 py-2 px-4 rounded-sm mt-4 md:mt-0 w-full md:w-auto">
        <input
          type="text"
          placeholder="What are you looking for? 🔍"
          className="w-full md:w-52 px-2 py-1"
        />
      </div>
    </div>
  );
};

export default Navbar;
