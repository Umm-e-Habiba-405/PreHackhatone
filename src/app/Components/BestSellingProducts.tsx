// import React from 'react'
// import Image from 'next/image'

// const BestSellingProducts = () => {
//   return (
//     <div className='border-2 pb-10'>
//       <h2 className='text-red-500 font-bold mx-56 mt-20 text-[20px]'>This Month</h2>
//       <div className='flex justify-between mr-7'>
//       <h1 className='mx-56 text-[32px] font-bold'>Best Selling Product</h1>
//        <button className='text-white bg-red-500 py-2 px-7 '> View All</button>
//       </div>
//       <div className='flex gap-[30px] justify-center mt-7'>
//         <div className='w-[270px h-[350px] transform transition hover:scale-105'>
//             <img src="/Cart (3).png" alt="" className='w-[270px] h-[250px] '/>
//             <button className='bg-black w-[270px] h-[41px] text-white gap-2   pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24} className="ml-3 mb-16"/>Add To Cart</button>
//             <p className="font-bold mt-8">The north coat</p>
//         <p className="text-red-700 flex gap-3">$260 <p className="text-gray-500"><del>$360 </del></p></p>
//         <p>★★★★★(65)</p>
//         </div>
//         <div className='w-[270px h-[350px] transform transition hover:scale-105'>
//             <img src="/Cart.png" alt="" />
//             <button className='bg-black w-[270px] h-[41px] text-white gap-2   pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24} className="ml-3 mb-16"/>Add To Cart</button>
//             <p className="font-bold mt-8">Gucci duffle bag</p>
//         <p className="text-red-700 flex gap-3">$960 <p className="text-gray-500"><del>$1160</del></p></p>
//         <p>★★★★★(65)</p>
//         </div>
//         <div className='w-[270px h-[350px] transform transition hover:scale-105'>
//             <img src="/Cart (2).png" alt="" />
//             <button className='bg-black w-[270px] h-[41px] text-white gap-2   pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24} className="ml-3 mb-16"/>Add To Cart</button>
//             <p className="font-bold mt-8">RGB liquid CPU Cooler</p>
//         <p className="text-red-700 flex gap-3">$160 <p className="text-gray-500"> <del>$170</del> </p></p>
//         <p>★★★★★(65)</p>
//         </div>
//         <div className='w-[270px h-[350px] transform transition hover:scale-105'>
//             <img src="/Cart (1).png" alt="" />
//             <button className='bg-black w-[270px] h-[41px] text-white gap-2   pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24} className="ml-3 mb-16"/>Add To Cart</button>
//             <p className="font-bold mt-8">Small BookSelf</p>
//         <p className="text-red-700 flex gap-3">$360 </p>
//         <p>★★★★★(65)</p>
//         </div>
//       </div>
      

//     </div>
//   )
// }

// export default BestSellingProducts
  
import React from 'react';
import Image from 'next/image';

const BestSellingProducts = () => {
  return (
    <div className="border-2 pb-10">
      {/* Section Heading */}
      <h2 className="text-red-500 font-bold ml-56 mt-20 text-lg sm:text-xl lg:text-[20px]">
        This Month
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mx-5 sm:mx-14 lg:mx-56 mt-5">
        <h1 className="text-center sm:text-left text-xl sm:text-2xl lg:text-[32px] font-bold">
          Best Selling Product
        </h1>
        <button className="text-white bg-red-500 py-2 px-7 mt-4 sm:mt-0">
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-7 px-5">
        {/* Product 1 */}
        <div className="w-full sm:w-[270px] transform transition hover:scale-105">
          <Image
            src="/Cart (3).png"
            alt="The north coat" width={270} height={250}
            className="w-full sm:w-[270px] h-[250px] object-cover"
          />
          <button className="bg-black w-full sm:w-[270px] h-[41px] text-white gap-2 flex justify-center items-center">
            <Image src="/Cart1.png" alt="Cart Icon" width={24} height={24} />
            Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">The north coat</p>
          <p className="text-red-700 flex justify-center gap-2">
            $260 <span className="text-gray-500"><del>$360</del></span>
          </p>
          <p className="text-center">★★★★★ (65)</p>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-[270px] transform transition hover:scale-105">
          <Image
            src="/Cart (9).png"
            alt="Jr. Zoom Soccer Cleats" width={270} height={250}
            className="w-full sm:w-[270px] h-[250px] object-cover"
          />
          <button className="bg-black w-full sm:w-[270px] h-[41px] text-white gap-2 flex justify-center items-center">
            <Image src="/Cart1.png" alt="Cart Icon" width={24} height={24} />
            Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">Gucci duffle bag</p>
          <p className="text-red-700 flex justify-center gap-2">
            $960 <span className="text-gray-500"><del>$1160</del></span>
          </p>
          <p className="text-center">★★★★★ (65)</p>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-[270px] transform transition hover:scale-105">
          <Image
            src="/Cart (2).png"
            alt="RGB liquid CPU Cooler" width={270} height={250}
            className="w-full sm:w-[270px] h-[250px] object-cover"
          />
          <button className="bg-black w-full sm:w-[270px] h-[41px] text-white gap-2 flex justify-center items-center">
            <Image src="/Cart1.png" alt="Cart Icon" width={24} height={24} />
            Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">RGB liquid CPU Cooler</p>
          <p className="text-red-700 flex justify-center gap-2">
            $160 <span className="text-gray-500"><del>$170</del></span>
          </p>
          <p className="text-center">★★★★★ (65)</p>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-[270px] transform transition hover:scale-105">
          <Image
            src="/Cart (1).png"
            alt="Small BookSelf" width={270} height={250}
            className="w-full sm:w-[270px] h-[250px] object-cover"
          />
          <button className="bg-black w-full sm:w-[270px] h-[41px] text-white gap-2 flex justify-center items-center">
            <Image src="/Cart1.png" alt="Cart Icon" width={24} height={24} />
            Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">Small BookSelf</p>
          <p className="text-red-700 flex justify-center gap-2">$360</p>
          <p className="text-center">★★★★★ (65)</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
