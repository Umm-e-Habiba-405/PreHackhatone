
import React from "react";

const TopHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black py-4 px-4 md:py-7 md:px-10 lg:px-72 text-white">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <div className="font-bold cursor-pointer">Shop Now</div>
      </div>

      {/* Right Section */}
      <div className="mt-2 md:mt-0 cursor-pointer">English v</div>
    </div>
  );
};

export default TopHeader;
