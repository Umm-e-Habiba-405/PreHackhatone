
import React from 'react';

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
          <img src="/Frame 684.png" alt="Featured Item" className="w-full sm:w-auto" />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <img src="/Frame 685.png" alt="New Arrival Item" className="w-full sm:w-auto" />
          </div>
          <div className="flex gap-5 sm:gap-[30px]">
            <img src="/Frame 686.png" alt="Item 1" className="w-full sm:w-auto" />
            <img src="/Frame 687.png" alt="Item 2" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-[90px] mt-14 sm:mt-[91px]">
        <div className="text-center">
          <img src="/Services.png" alt="Free Delivery" className="h-[80px] w-[80px] mx-auto" />
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">FREE AND FAST DELIVERY</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="text-center">
          <img src="/Services (4).png" alt="24/7 Service" className="h-[80px] w-[80px] mx-auto" />
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">24/7 CUSTOMER SERVICE</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center">
          <img src="/Services (2).png" alt="Money Back Guarantee" className="h-[80px] w-[80px] mx-auto" />
          <h2 className="font-bold text-[16px] sm:text-[18px] mt-5">MONEY BACK GUARANTEE</h2>
          <p className="text-[14px] sm:text-[15px] mt-1">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
