
import React from 'react';
import Header1 from '../Components/Headers';

const Login = () => {
  return (
    <div>
      <Header1 />
      <div className='flex flex-col md:flex-row justify-center gap-20 mt-[100px] px-6 sm:px-12 md:px-52'>
        <div>
          <img src="/dl.beatsnoop 1.png" alt="" />
        </div>
        <div>
          <h1 className='mt-20 text-[40px] font-bold text-center md:text-left'>Login into Exclusive</h1>
          <p className='font-semibold text-center md:text-left'>Enter your Details Below</p>
          <input type="text" placeholder='Email or phone number' className='border-b-2 text-[20px] mt-14 w-[370px] mx-auto md:mx-0' /><br />
          <input type="text" placeholder='Password' className='border-b-2 text-[20px] mt-8 w-[370px] mx-auto md:mx-0' />
          <div className='flex flex-col md:flex-row justify-between items-center mt-14'>
            <div>
              <button className='bg-red-500 py-3 px-3 text-white w-[143px] h-[56px] rounded-md text-[19px]'>Log in</button>
            </div>
            <div>
              <p className='text-red-500 mt-5 text-[19px]'>
                <a href="#">Forget Password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
