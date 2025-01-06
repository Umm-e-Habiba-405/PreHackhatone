
import React from 'react'
import Header from '../Components/Header'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-16">
        {/* Contact Info Section */}
        <div className="bg-back shadow-lg w-full md:w-[340px] h-auto md:h-[457px] mt-6 md:mt-24 md:ml-24 p-4">
          <div className="border-b-2 border-gray-600 pb-4">
            <div className="flex gap-3 justify-center">
              <Image src={'/icons-phone.png'} alt="" width={40} height={40} className="mt-2 md:mt-10" />
              <p className="text-[20px] md:text-[23px] font-semibold mt-2 md:mt-10">Call to Us</p>
            </div>
            <p className="text-[14px] md:text-[16px] font-medium mt-4 md:mt-10 text-center md:text-left">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[14px] md:text-[16px] font-medium mt-3 text-center md:text-left">
              Phone: +8801611112222
            </p>
          </div>
          <div className="mt-4">
            <div className="flex gap-3 justify-center">
              <Image src={'/icons-mail (1).png'} alt="" width={40} height={40} className="mt-2 md:mt-10" />
              <p className="text-[20px] md:text-[23px] font-semibold mt-2 md:mt-10">Write to Us</p>
            </div>
            <p className="text-[14px] md:text-[16px] font-medium mt-4 text-center md:text-left">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px] md:text-[16px] font-medium mt-2 text-center md:text-left">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[14px] md:text-[16px] font-medium mt-2 text-center md:text-left">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-back shadow-lg w-full md:w-auto mt-6 md:mt-24 p-4">
          <div className="flex flex-wrap gap-4 px-4 py-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full md:w-[235px] h-[50px] bg-bg rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder="Your Phone Number*"
              className="w-full md:w-[235px] h-[50px] bg-bg rounded-md px-3 py-2"
            />
            <input
              type="text"
              placeholder="Your E-mail*"
              className="w-full md:w-[235px] h-[50px] bg-bg rounded-md px-3 py-2"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="w-full md:w-[737px] h-[207px] bg-bg rounded-md px-3 py-2 mt-4"
            ></textarea>
          </div>
          <button className="bg-red-500 w-full md:w-[215px] h-[56px] px-3 py-2 text-center text-white font-medium mt-6 md:mt-10 mx-auto block">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

