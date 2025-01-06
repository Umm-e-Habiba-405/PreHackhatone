// import React from 'react'

// const Banner = () => {
//   return (
//     <div className='flex justify-center mt-20'>
//     <div className='flex bg-black w-[1170px] h-[500px]'>
//       <div >
//         <h3 className='text-green-600 text-[25px] mt-[69px] ml-[56px] font-bold'>Categories</h3>
//             <h1 className='text-white text-[48px] mt-151px ml-[56px] font-bold'>Enhance Your Music Experience</h1>
//             <ul className='flex gap-4 mt-[21px] ml-[56px]'>
//                 <li className='bg-white rounded-full py-1 px-2'> <b className='mx-4'>5</b><br/> <span className='text-[16px]'>Days</span></li>
//                 <li className='bg-white rounded-full py-1 px-1 mx-4'> <b className='mx-4'>23</b><br/> <span className='text-[16px] '> hours</span></li>
//                 <li className='bg-white rounded-full py-1 px-1'> <b className='mx-4'>59</b><br/> <span className='text-[15px]'> Minutes</span></li>
//                 <li className='bg-white rounded-full py-1 px-0'><b className='mx-4'>35</b><br/> <span className='text-[15px]'>Seconds</span></li>
//             </ul>
//             <button className='bg-green-500 py-2 px-10 mt-10 ml-[56px] text-white font-bold'>Buy Now</button>
//       </div>
//       <div>
//         <img src="/Frame 694.png" alt="" className=' -ml-24 mt-[75px] w-[568px] h-[330px]' />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Banner

import React from 'react';

const Banner = () => {
  return (
    <div className="flex justify-center mt-20 px-5 sm:px-10">
      <div className="flex flex-col lg:flex-row bg-black w-full lg:w-[1170px] h-auto lg:h-[500px] rounded-lg overflow-hidden">
        {/* Text Section */}
        <div className="flex flex-col justify-center p-6 lg:p-10 text-center lg:text-left">
          <h3 className="text-green-600 text-[20px] lg:text-[25px] font-bold">
            Categories
          </h3>
          <h1 className="text-white text-[32px] lg:text-[48px] font-bold mt-4">
            Enhance Your Music Experience
          </h1>
          <ul className="flex justify-center lg:justify-start gap-4 mt-4">
            <li className="bg-white rounded-full py-2 px-4 text-center">
              <b className="block text-lg">5</b>
              <span className="text-sm">Days</span>
            </li>
            <li className="bg-white rounded-full py-2 px-4 text-center">
              <b className="block text-lg">23</b>
              <span className="text-sm">Hours</span>
            </li>
            <li className="bg-white rounded-full py-2 px-4 text-center">
              <b className="block text-lg">59</b>
              <span className="text-sm">Minutes</span>
            </li>
            <li className="bg-white rounded-full py-2 px-4 text-center">
              <b className="block text-lg">35</b>
              <span className="text-sm">Seconds</span>
            </li>
          </ul>
          <button className="bg-green-500 py-2 px-6 mt-6 lg:mt-10 text-white font-bold rounded-lg hover:bg-green-600 transition">
            Buy Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="/Frame 694.png"
            alt="Music Experience"
            className="w-full max-w-[400px] lg:max-w-[568px] lg:h-[330px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
