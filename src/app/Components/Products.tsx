
import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="px-5 sm:px-10">
      {/* Heading Section */}
      <h2 className="text-red-500 font-bold text-center sm:text-left sm:mx-40 mt-16 text-[20px] sm:text-[25px]">
        Our Products
      </h2>
      <h1 className="text-center sm:text-left sm:mx-40 text-[24px] sm:text-[32px] font-bold mt-4">
        Explore Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-10 mx-auto sm:mx-20 lg:mx-48">
        {[
          {
            src: "/Cart (6).png",
            title: "Breed Dry Dog Food",
            price: "$960",
          },
          {
            src: "/Cart (3).png",
            title: "CANON EOS DSLR Camera",
            price: "$360",
          },
          {
            src: "/Cart (5).png",
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
          },
          {
            src: "/Cart (7).png",
            title: "Curology Product Set",
            price: "$500",
          },
          {
            src: "/Cart (8).png",
            title: "Kids Electric Car",
            price: "$960",
          },
          {
            src: "/Cart (9).png",
            title: "Jr. Zoom Soccer Cleats",
            price: "$960",
          },
          {
            src: "/Cart (10).png",
            title: "GP11 Shooter USB Gamepad",
            price: "$960",
          },
          {
            src: "/Cart (3).png",
            title: "Quilted Satin Jacket",
            price: "$960",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition hover:scale-105 w-full max-w-[270px] mx-auto h-[350px]"
          >
            <img src={product.src} alt={product.title} className="w-full" />
            <button className="bg-black w-full h-[41px] text-white flex items-center justify-center gap-2 mt-3">
              <Image src="/Cart1.png" alt="" width={24} height={24} />
              Add To Cart
            </button>
            <p className="mt-3 text-center">{product.title}</p>
            <p className="text-red-700 text-center">
              {product.price}{' '}
              <span className="text-yellow-400">★★★★★</span>(35)
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-14 mb-6">
        <button className="border-2 bg-red-600 px-6 py-3 text-white w-full max-w-[240px] h-[56px]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
