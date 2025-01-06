// import React from 'react'

// const Categories = () => {
//   return (
//     <div className='border-2  p-10'>
//       <h2 className='text-red-500 font-bold mx-40 mt-16 text-[25px]'>Categories</h2>
//       <h1 className='mx-40 text-[32px] font-bold'>Browse By Category</h1>
//       <div className='flex gap-[30px] justify-center mt-9'>
//         <div className='border-2 w-[170px] h-[145px]  cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105'>
//             <img src="/Category-CellPhone.png" alt="" className=' w-[60px] h-[60px] my-5 mx-12 '/>
//             <p className='text-center '>Phones</p>

//         </div>
//         <div className='border-2 w-[170px] h-[145px] cursor-pointer  hover:bg-red-500 hover:text-white transform transition hover:scale-105'>
//             <img src="/Category-Computer.png" alt=""className=' w-[60px] h-[60px] my-5 mx-12' />
//             <p className='text-center'>Computer</p>
//         </div>
        
//         <div className='border-2 w-[170px] h-[145px]  cursor-pointer  hover:bg-red-500 hover:text-white transform transition hover:scale-105'>
//             <img src="/Category-SmartWatch.png" alt=""  className='w-[60px] h-[60px] my-5 mx-12'/>
//             <p className='text-center'>Smart Watch</p>
//         </div>
//         <div className='border-2 hover:bg-red-500 bg-red-500 hover:text-white w-[170px] h-[145px] cursor-pointer  transform transition hover:scale-105'>
//             <img src="/Category-Camera.png" alt=""className='  w-[60px] h-[60px] my-5 mx-12' />
//             <p className='text-center'>Camera</p>
//         </div>
//         <div className='border-2 w-[170px] h-[145px] cursor-pointer  hover:bg-red-500 hover:text-white transform transition hover:scale-105'>
//             <img src="/Category-Headphone.png" alt=""className=' w-[60px] h-[60px] my-5 mx-12' />
//             <p className='text-center'>HeadPhone</p>
//         </div>
//         <div className='border-2 w-[170px] h-[145px]  cursor-pointer  hover:bg-red-500 hover:text-white transform transition hover:scale-105'>
//             <img src="/Category-Gamepad.png" alt="" className=' w-[60px] h-[60px] my-5 mx-12'/>
            
//             <p className='text-center'>Gaming</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Categories
import React from 'react';

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
          <img
            src="/Category-CellPhone.png"
            alt="Phones"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Phones</p>
        </div>

        {/* Category 2 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <img
            src="/Category-Computer.png"
            alt="Computer"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Computer</p>
        </div>

        {/* Category 3 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <img
            src="/Category-SmartWatch.png"
            alt="Smart Watch"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Smart Watch</p>
        </div>

        {/* Category 4 */}
        <div className="border-2 w-full h-[145px] cursor-pointer bg-red-500 hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <img
            src="/Category-Camera.png"
            alt="Camera"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Camera</p>
        </div>

        {/* Category 5 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <img
            src="/Category-Headphone.png"
            alt="HeadPhone"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">HeadPhone</p>
        </div>

        {/* Category 6 */}
        <div className="border-2 w-full h-[145px] cursor-pointer hover:bg-red-500 hover:text-white transform transition hover:scale-105 flex flex-col items-center justify-center">
          <img
            src="/Category-Gamepad.png"
            alt="Gaming"
            className="w-[60px] h-[60px] mb-2"
          />
          <p className="text-center">Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
