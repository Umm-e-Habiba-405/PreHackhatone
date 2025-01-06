
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 py-4 md:py-8 justify-between px-4 md:px-10 lg:px-52 border-2">
      {/* Logo Section */}
      <div className="font-bold text-[20px] md:text-[24px] text-center md:text-left">
        Exclusive
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-[16px] md:text-[20px] font-semibold">
          <li>
            <Link href="/">Home</Link>
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

      {/* Search and Icons Section */}
      <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 md:gap-6 border-2 py-2 px-4 md:px-10 rounded-sm">
        <input
          type="text"
          placeholder="What are you looking for? 🔍"
          className="w-full md:w-52 p-2 border rounded-md"
        />
        <div className="flex items-center gap-3">
          <Image src={'/Vector.png'} alt="Search Icon" width={25} height={1} />
          <Image src={'/Cart1 (1).png'} alt="Cart Icon" width={25} height={10} />
          <Image src={'/user.png'} alt="User Icon" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default Header;
