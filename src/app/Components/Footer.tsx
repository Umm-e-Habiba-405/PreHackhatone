
import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="flex flex-wrap bg-black justify-around mt-24 px-5 sm:px-10 py-10">
      {/* Subscribe Section */}
      <div className="mt-10 leading-9 w-full sm:w-auto text-center sm:text-left">
        <h1 className="text-white font-bold text-[20px] sm:text-[23px]">Exclusive</h1>
        <h2 className="text-white cursor-pointer">Subscribe</h2>
        <p className="text-white cursor-pointer">Get 10% off your first order</p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="border-2 py-1 px-2 mt-2 rounded-sm bg-black text-white w-full sm:w-auto"
        />
      </div>

      {/* Support Section */}
      <div className="mt-10 leading-7 w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-white font-bold text-[20px] sm:text-[23px]">Support</h2>
        <p className="text-white mt-3 cursor-pointer">
          111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh. <br />
          exclusive@gmail.com <br />
          +88015-88888-9999
        </p>
      </div>

      {/* Account Section */}
      <div className="mt-10 leading-7 w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-white font-bold text-[20px] sm:text-[23px]">Account</h2>
        <p className="text-white mt-3 cursor-pointer">
          My Account <br /> Login/Register <br /> Cart <br /> Wishlist <br /> Shop
        </p>
      </div>

      {/* Quick Link Section */}
      <div className="mt-10 leading-7 w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-white font-bold text-[20px] sm:text-[23px]">Quick Link</h2>
        <p className="text-white mt-3 cursor-pointer">
          Privacy Policy <br /> Terms and Use <br /> FAQ <br /> Contact
        </p>
      </div>

      {/* Download App Section */}
      <div className="mt-10 leading-7 w-full sm:w-auto text-center sm:text-left">
        <h2 className="text-white font-bold text-[20px] sm:text-[23px]">Download App</h2>
        <p className="text-white mt-3 cursor-pointer">Save $3 with App New User Only</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
          <div>
            <Image src="/Qr Code.png" alt="QR Code" width={80} height={80} /> 
          </div>
          <div>
            <div>
              <Image src="/GooglePlay.png" alt="Google Play" width={110} height={40}/> 
            </div>
            <div>
              <Image src="/download-appstore.png" alt="App Store"width={110} height={40} /> 
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start gap-5 mt-7">
          <div>
            <Image src="/Group (1).png"
              alt="Social Icon"
              className="cursor-pointer transform transition hover:scale-110" width={24} height={24}/>
             
          </div>
          <div>
            <Image src="/Group.png"
              alt="Social Icon"
              className="cursor-pointer transform transition hover:scale-110" width={24} height={24}/>
             
          </div>
          <div>
            <Image
              src="/Icon-Facebook.png"
              alt="Facebook" width={24} height={24}
              className="cursor-pointer transform transition hover:scale-110 "
            />
          </div>
          <div>
            <Image
              src="/Vector (1).png"
              alt="Social Icon" width={24} height={24}
              className="cursor-pointer transform transition hover:scale-110 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
