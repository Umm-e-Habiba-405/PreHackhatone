
import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="border-2 p-10">
      {/* Header Section */}
      <h2 className="text-red-500 font-bold text-center mt-16 text-xl sm:text-2xl lg:text-[25px]">
        Categories
      </h2>
      <h1 className="text-center text-lg sm:text-xl lg:text-[32px] font-bold">
        Browse By Category
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-center mt-9">
        {/* Category 1 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-CellPhone.png"
            alt="Phones" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Phones</p>
        </div>

        {/* Category 2 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-Computer.png"
            alt="Computer" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Computer</p>
        </div>

        {/* Category 3 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-SmartWatch.png"
            alt="Smart Watch" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Smart Watch</p>
        </div>

        {/* Category 4 */}
        <div className="border-2 w-full h-[145px] cursor-pointer bg-red-500 hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-Camera.png"
            alt="Camera" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Camera</p>
        </div>

        {/* Category 5 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-Headphone.png"
            alt="HeadPhone" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">HeadPhone</p>
        </div>

        {/* Category 6 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <Image
            src="/Category-Gamepad.png"
            alt="Gaming" width={170} height={145}
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
