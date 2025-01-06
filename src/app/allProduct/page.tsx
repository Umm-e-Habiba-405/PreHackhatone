// // import React from 'react'
// // import Image from 'next/image'
// // import Header from '../Components/Header'

// // const allProduct = () => {
// //   return (
// //     <div>
// //       <Header/>
// //       <div className='flex justify-between mx-24 mt-16'>
// //         <p className=' text-[17px] '>Whishlist(4)</p>
// //         <button className='py-3 px-5 border-2 '>Move all to blog</button>
// //       </div>
// //       <div className='flex justify-center gap-[30px] mt-14'>
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/Frame 609.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$1160 <del className='text-gray-600 ml-3'>$960</del></p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568.png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>
// //         {/* card 2 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/Frame 610.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$1960 </p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568.png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>

// //         {/* card3 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/Frame 608.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$560 </p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568.png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>

// //         {/* card4 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$760 </p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568.png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>
        
// //       </div>
// //       <div className='flex justify-between mx-24 mt-16'>
// //             <p className=' text-[27px] font-semibold '>Just for you</p>
// //             <button className='py-3 px-8 border-2 '>See all</button>
// //         </div>
// //         <div className='flex justify-center gap-[30px] mt-14'>
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/ideapad-gaming-3i-01-500x500 1.png'} alt=''width={158} height={166} className='ml-7'/>
// //             <button className='bg-black w-[270px] mt-4 h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$1160 <del className='text-gray-600 ml-3'>$960</del></p>
// //             <p className='text-yellow-500'>★★★★★ (63)</p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568 (1).png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>
// //         {/* card 2 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/Frame 613.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$1960 </p>
// //             <p className='text-yellow-500'>★★★★★ (63)</p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568 (1).png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>

// //         {/* card3 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/Frame 611.png'} alt=''width={190} height={180} className='ml-7'/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2 -ml-4 pl-14 pt-2 flex'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$560 </p>
// //             <p className='text-yellow-500'>★★★★★ (63)</p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568 (1).png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>

// //         {/* card4 */}
// //         <div className='relative group w-64 h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden px-5 py-5'>
// //             <Image src={'/ak-900-01-500x500 1.png'} alt=''width={191} height={101} className='ml-7 '/>
// //             <button className='bg-black w-[270px] h-[41px] text-white gap-2  -ml-4 pl-14 pt-2 flex mt-20'> <Image src={'/Cart1.png'} alt='' width={24} height={24}/>Add To Cart</button>
// //             <p className='mt-2 ml-2  font-thin'>Gucci duffle bag</p>
// //             <p className='text-red-600 ml-2'>$760 </p>
// //             <p className='text-yellow-500'>★★★★★ (63)</p>
// //             <button className='bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0  px-3  opacity-0 group-hover:opacity-100 transition-all duration-300'>
// //                 -35%
// //             </button>
// //             <button
// //     className="absolute mt-3 top-0 right-0  text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
// //   >
// //     <Image src={'/Frame 568 (1).png'} alt='' width={34} height={34}/>

// //   </button>

// //         </div>
        
// //       </div>
// //     </div>
// //   )
// // }

// // export default allProduct 





// "use client";
// import React from "react";
// import Header from "../Components/Header";
// import { useCart } from "../CartContext";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

// const products = [
//   { name: "Gucci Duffle Bag", price: 1160, image: "/Frame 609.png", rating: 4 },
//   { name: "RGB liquid CPU Cooler", price: 1960, image: "/Frame 610.png", rating: 5 },
//   { name: "GP11 Shooter USB Gamepad", price: 560, image: "/Frame 608.png", rating: 3 },
//   { name: "Quilted Satin Jacket", price: 760, image: "/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png", rating: 4 },
//   { name: "ASUS FHD Gaming Laptop", price: 1160, image: "/ideapad-gaming-3i-01-500x500 1.png", rating: 5 },
//   { name: "IPS LCD Gaming Monitor", price: 1960, image: "/Frame 613.png", rating: 2 },
//   { name: "HAVIT HV-G92 Gamepad", price: 560, image: "/Frame 611.png", rating: 4 },
//   { name: "AK-900 Wired Keyboard", price: 760, image: "/ak-900-01-500x500 1.png", rating: 3 },
// ];

// const AllProducts = () => {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = (product: typeof products[0]) => {
//     addToCart({ ...product, quantity: 1 });
//     router.push("/cart");
//   };

//   return (
//     <div>
//       <Header/>
//     <div className="p-8 w-[1400px] items-center ml-28">
//       <h1 className="text-[36px] font-bold text-center">All Products</h1>
//       <div className="grid grid-cols-4 gap-6 mt-8">
//         {products.map((product, index) => (
//           <div key={index} className="relative group border p-4 rounded-md">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={150}
//               height={150}
//               className="mx-auto"
//             />
//             <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
//             <p className="text-red-600">${product.price}</p>

//             {/* Static Rating Stars */}
//             <div className="flex mt-2">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <FontAwesomeIcon
//                   key={i}
//                   icon={i < product.rating ? fasStar : farStar}
//                   className="text-yellow-500"
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => handleAddToCart(product)}
//               className="bg-black text-white px-4 py-2 rounded-md mt-4 w-full"
//             >
//               Add To Cart
//             </button>
//             <button className="bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
//               -35%
//             </button>
//             <button className="absolute mt-3 top-0 right-0 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <Image src="/Frame 568.png" alt="" width={34} height={34} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AllProducts;


"use client";
import React from "react";
import Header from "../Components/Header";
import { useCart } from "../CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const products = [
  { name: "Gucci Duffle Bag", price: 1160, image: "/Frame 609.png", rating: 4 },
  { name: "RGB liquid CPU Cooler", price: 1960, image: "/Frame 610.png", rating: 5 },
  { name: "GP11 Shooter USB Gamepad", price: 560, image: "/Frame 608.png", rating: 3 },
  { name: "Quilted Satin Jacket", price: 760, image: "/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png", rating: 4 },
  { name: "ASUS FHD Gaming Laptop", price: 1160, image: "/ideapad-gaming-3i-01-500x500 1.png", rating: 5 },
  { name: "IPS LCD Gaming Monitor", price: 1960, image: "/Frame 613.png", rating: 2 },
  { name: "HAVIT HV-G92 Gamepad", price: 560, image: "/Frame 611.png", rating: 4 },
  { name: "AK-900 Wired Keyboard", price: 760, image: "/ak-900-01-500x500 1.png", rating: 3 },
];

const AllProducts = () => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  return (
    <div>
      <Header />
      <div className="p-8 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div key={index} className="relative group border p-4 rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-red-600">${product.price}</p>

              {/* Static Rating Stars */}
              <div className="flex mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < product.rating ? fasStar : farStar}
                    className="text-yellow-500"
                  />
                ))}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="bg-black text-white px-4 py-2 rounded-md mt-4 w-full"
              >
                Add To Cart
              </button>
              <button className="bg-red-600 mt-3 ml-4 text-white absolute top-0 left-0 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                -35%
              </button>
              <button className="absolute mt-3 top-0 right-0 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Image src="/Frame 568.png" alt="" width={34} height={34} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
