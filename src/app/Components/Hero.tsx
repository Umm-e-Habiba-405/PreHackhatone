
 
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-10 py-10 px-4">
      {/* Category List */}
      <div className="w-full md:w-auto">
        <ul className="leading-12 text-center md:text-left text-sm md:text-base">
          <li className='text-[19px] leading-9'>Women's Fashion</li>
          <li className='text-[19px] leading-9'>Men's Fashion</li>
          <li className='text-[19px] leading-9'>Electronics</li>
          <li className='text-[19px] leading-9'>Home and LifeStyle</li>
          <li className='text-[19px] leading-9'>Medicines</li>
          <li className='text-[19px] leading-9'>Sports and Outdoor</li>
          <li className='text-[19px] leading-9'>Baby and Toy's</li>
          <li className='text-[19px] leading-9'>Groceries and Pots</li>
          <li className='text-[19px] leading-9'>Health and Beauty</li>
        </ul>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-auto">
        <Image  src="/Frame 560.png"
          alt="Hero"width={892} height={344}
          className="w-full max-w-sm md:max-w-none"/>
         
        
      </div>
    </div>
  );
};

export default Hero;
