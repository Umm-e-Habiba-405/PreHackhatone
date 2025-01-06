
import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
    <div className="px-5 sm:px-10">
      {/* Heading Section */}
      <h2 className="text-red-500 font-bold text-center sm:text-left sm:mx-40 mt-16 text-[20px] sm:text-[25px]">
        Featured
      </h2>
      <h1 className="text-center sm:text-left sm:mx-40 text-[24px] sm:text-[32px] font-bold mt-4">
        New Arrival
      </h1>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[30px] mt-10">
        <div className="w-full sm:w-auto">
          <Image src={'/Frame 684.png'} alt='' width={570} height={600}  className="w-full sm:w-auto"/> 
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <Image src={'/Frame 685.png'} alt="" width={570} height={284}  className="w-full sm:w-auto"/> 
          </div>
          <div className="flex gap-5 sm:gap-[30px]">
            <Image src={'/Frame 686.png'} alt='' width={270} height={284} className="w-full sm:w-auto" /> 
            <Image src={'/Frame 687.png'} alt='' width={270} height={284} className="w-full sm:w-auto"/> 
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-[90px] mt-14 sm:mt-[91px]">
        <div className="text-center">
          <Image src={'/Services.png'} alt='' width={80} height={80} className="h-[80px] w-[80px] mx-auto" /> 
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">FREE AND FAST DELIVERY</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="text-center">
          <Image src={'/Services (4).png'} alt='' width={80} height={80} className="h-[80px] w-[80px] mx-auto"/> 
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">24/7 CUSTOMER SERVICE</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center">
          <Image src={'/Services (2).png'} alt='' width={80} height={80} className="h-[80px] w-[80px] mx-auto" /> 
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">MONEY BACK GUARANTEE</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
