


import React from 'react'
import Header from '../Components/Header'

const PageNotFound = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center mt-24'>
        <h1 className='text-[110px] font-semibold text-center sm:text-[60px]'>
          Page Not Found
        </h1>
        <p className='text-center text-[20px] font-medium mt-14 sm:text-[16px]'>
          Your visited page not found. You may go home page.
        </p>
        <button className='bg-red-500 w-[215px] h-[56px] px-3 py-2 text-center text-white font-medium mt-14 sm:w-[180px] sm:h-[48px] sm:mt-10'>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default PageNotFound
