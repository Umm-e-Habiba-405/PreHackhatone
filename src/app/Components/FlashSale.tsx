
 /* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function FlashSales() {
  return (
    <section className="border-2 px-4 py-6 md:py-12">
      <h3 className="text-red-500 font-bold text-[24px] md:text-[32px] text-center md:text-left mb-4 ml-12">Today's</h3>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-[30px] md:text-[40px] font-bold text-center md:text-left ml-6 mr-6 md:ml-8 md:mr-8">Flash Sales</h2>
        <div className="grid grid-cols-2 md:flex md:space-x-6 text-center md:text-left mt-4 md:mt-0 text-[16px] md:text-[35px] font-bold ml-6 mr-6 md:ml-8 md:mr-8 gap-4 md:gap-0">
  <span className="flex flex-col items-center">
    <h3 className="text-[14px] md:text-[20px] uppercase text-gray-600">Days</h3>
    <span className="text-black">03</span>
  </span>
  <span className="hidden md:inline text-black">:</span>
  <span className="flex flex-col items-center">
    <h3 className="text-[14px] md:text-[20px] uppercase text-gray-600">Month</h3>
    <span className="text-black">23</span>
  </span>
  <span className="hidden md:inline text-black">:</span>
  <span className="flex flex-col items-center">
    <h3 className="text-[14px] md:text-[20px] uppercase text-gray-600">Year</h3>
    <span className="text-black">19</span>
  </span>
  <span className="hidden md:inline text-black">:</span>
  <span className="flex flex-col items-center">
    <h3 className="text-[14px] md:text-[20px] uppercase text-gray-600">Seconds</h3>
    <span className="text-black">56</span>
  </span>
</div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="transform transition hover:scale-105 cursor-pointer">
          <Image src="/Frame 570.png" alt="" width={270} height={250} className="mx-auto" />
          <button className="bg-black w-[270px] h-[41px] text-white flex justify-center items-center mx-auto mt-2">
            <Image src="/Cart1.png" alt="" width={24} height={24} className="mr-2" /> Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">HAVIT HV-G92 Gamepad</p>
          <p className="text-red-700 flex justify-center gap-3 mt-2">
            $120 <span className="text-gray-500 line-through">$160</span>
          </p>
          <p className="text-center">★★★★★ (88)</p>
        </div>

        <div className="transform transition hover:scale-105 cursor-pointer">
          <Image src="/Cart (3).png" alt="" width={270} height={250} className="mx-auto" />
          <button className="bg-black w-[270px] h-[41px] text-white flex justify-center items-center mx-auto mt-2">
            <Image src="/Cart1.png" alt="" width={24} height={24} className="mr-2" /> Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">Quilted Satin Jacket</p>
          <p className="text-red-700 flex justify-center gap-3 mt-2">
            $960 <span className="text-gray-500 line-through">$1160</span>
          </p>
          <p className="text-center">★★★★★ (75)</p>
        </div>

        <div className="transform transition hover:scale-105 cursor-pointer">
          <Image src="/Frame 570 (1).png" alt="" width={270} height={250} className="mx-auto" />
          <button className="bg-black w-[270px] h-[41px] text-white flex justify-center items-center mx-auto mt-2">
            <Image src="/Cart1.png" alt="" width={24} height={24} className="mr-2" /> Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">IPS LCD Gaming Monitor</p>
          <p className="text-red-700 flex justify-center gap-3 mt-2">
            $370 <span className="text-gray-500 line-through">$400</span>
          </p>
          <p className="text-center">★★★★★ (99)</p>
        </div>

        <div className="transform transition hover:scale-105 cursor-pointer">
          <Image src="/Frame 570 (2).png" alt="" width={270} height={250} className="mx-auto" />
          <button className="bg-black w-[270px] h-[41px] text-white flex justify-center items-center mx-auto mt-2">
            <Image src="/Cart1.png" alt="" width={24} height={24} className="mr-2" /> Add To Cart
          </button>
          <p className="font-bold mt-4 text-center">S-Series Comfort Chair</p>
          <p className="text-red-700 flex justify-center gap-3 mt-2">
            $375 <span className="text-gray-500 line-through">$400</span>
          </p>
          <p className="text-center">★★★★★ (99)</p>
        </div>
      </div>

      <Link href="/allProduct">
        <button className="border-2 bg-red-600 px-3 py-2 text-white mx-auto block mt-8 w-[234px] h-[56px]">
          View All Products
        </button>
      </Link>
    </section>
  );
}