

import React from 'react';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Image from 'next/image';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-12 mt-[100px] px-4 sm:px-8 md:px-16">
        <div className="hidden md:block">
          <Image src="/dl.beatsnoop 1.png" alt='' width={805} height={781}/> 
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[40px] font-bold mt-10 md:mt-0 text-center md:text-left">Create an account</h1>
          <p className="font-semibold text-center md:text-left">Enter your details below</p>

          <input
            type="text"
            placeholder="Name"
            className="border-b-2 mt-8 text-[20px] w-[370px] md:w-[400px] lg:w-[500px] px-2 py-1"
          />
          <br />
          <input
            type="text"
            placeholder="Email or phone number"
            className="border-b-2 text-[20px] mt-5 w-[370px] md:w-[400px] lg:w-[500px] px-2 py-1"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 text-[20px] mt-5 w-[370px] md:w-[400px] lg:w-[500px] px-2 py-1"
          />
          <div>
            <button className="py-2 px-3 rounded-sm bg-red-600 text-white mt-12 w-[371px] md:w-[400px] lg:w-[500px] h-[56px] text-[20px]">
              Create an account
            </button>
          </div>
          <div className="flex justify-center items-center border-2 rounded-sm mt-10 py-3 px-3 w-[371px] md:w-[400px] lg:w-[500px] gap-5">
            <div>
              <Image src={'/Icon-Google.png'} alt='' width={24} height={24}/> 
            </div>
            <div>
              <button className="text-center">Sign Up with Google</button>
            </div>
          </div>
          <p className="mt-5 text-[17px] text-center font-medium">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
