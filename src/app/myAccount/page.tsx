

import React from 'react';
import Headers from '../Components/Headers';

const MyAccount = () => {
  return (
    <div>
      <Headers />
      <div className='flex flex-col md:flex-row gap-8 md:gap-28 ml-6 md:ml-72 mt-12'>
        {/* Sidebar */}
        <div className='w-full md:w-[366px]'>
          <h1 className='text-[19px] font-semibold'>Manage My Account</h1>
          <p className='text-[17px] text-gray-500 mt-2 hover:text-red-500 cursor-pointer ml-6'>My Profile</p>
          <p className='text-[17px] text-gray-500 mt-2 hover:text-red-500 cursor-pointer ml-6'>Address Book</p>
          <p className='text-[17px] text-gray-500 mt-2 hover:text-red-500 cursor-pointer ml-6'>My Payment Option</p>
          <h1 className='text-[19px] font-semibold mt-5'>Orders</h1>
          <p className='text-[17px] text-gray-500 mt-2 ml-6 hover:text-red-500 cursor-pointer'>My Return</p>
          <p className='text-[17px] text-gray-500 mt-2 ml-6 hover:text-red-500 cursor-pointer'>My Cancellation</p>
          <h1 className='text-[19px] font-semibold mt-5'>My Wishlist</h1>
        </div>

        {/* Main Content */}
        <div className='w-full mt-12 md:mt-0'>
          <div className='flex flex-col md:flex-row gap-24'>
            <div>
              <h1 className='text-[19px] font-semibold hover:text-red-500 cursor-pointer'>Edit Your Profile</h1>
              <p className='text-[17px] font-medium mt-6'>First Name</p>
              <input
                type="text"
                placeholder='Enter Your Name'
                className='w-full md:w-[330px] h-[50px] px-2 py-2 border rounded-md bg-gray-200'
              />
              <p className='text-[17px] font-medium mt-2'>Email</p>
              <input
                type="text"
                placeholder='Enter Your Email'
                className='w-full md:w-[330px] h-[50px] px-2 py-2 border rounded-md bg-gray-200'
              />
            </div>
            <div>
              <p className='text-[17px] font-medium mt-12'>Last Name</p>
              <input
                type="text"
                placeholder='Enter Your Last Name'
                className='w-full md:w-[330px] h-[50px] px-2 py-2 border rounded-md bg-gray-200'
              />
              <p className='text-[17px] font-medium mt-2'>Address</p>
              <input
                type="text"
                placeholder='Enter Your Address'
                className='w-full md:w-[330px] h-[50px] px-2 py-2 border rounded-md bg-gray-200'
              />
            </div>
          </div>

          <p className='text-[17px] font-medium mt-6'>Password Changes</p>
          <input
            type="text"
            placeholder='Change Password'
            className='w-full md:w-[710px] h-[50px] px-2 py-2 rounded-md border mt-3 bg-gray-200'
          />
          <input
            type="text"
            placeholder='Confirm Password'
            className='w-full md:w-[710px] h-[50px] px-2 py-2 rounded-md border mt-5 bg-gray-200'
          />
          <div className='flex flex-col md:flex-row gap-9 justify-end mt-10'>
            <button className='text-black bg-slate-100 font-medium text-[19px] w-full md:w-[215px] h-[56px]'>Cancel</button>
            <button className='bg-red-500 w-full md:w-[215px] h-[56px] px-3 py-2 mx-10 text-white font-medium'>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
