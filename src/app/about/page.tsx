


import React from "react";
import Header from "../Components/Header";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center md:justify-around items-center">
        <div className="mt-12 md:mt-[222px] px-6 md:ml-[135px]">
          <h1 className="text-[36px] md:text-[54px] font-bold text-center md:text-left">Our Story</h1>
          <p className="text-[14px] md:text-[16px] font-medium leading-[22px] md:leading-[26px] mt-4 md:mt-0">
            Launced in 2015, Exclusive is South Asia premier online shopping<br />
            makterplace with an active presense in Bangladesh. Supported<br />
            by wide range of tailored marketing, data and service solutions,<br />
            Exclusive has 10,500 sellers and 300 brands and serves 3<br />
            million customers across the region.
          </p>
          <p className="text-[14px] md:text-[16px] font-medium leading-[22px] md:leading-[26px] mt-6">
            Exclusive has more than 1 Million products to offer, growing at a<br />
            very fast. Exclusive offers a diverse assortment in categories<br />
            ranging from consumer.
          </p>
        </div>
        <div className="mt-8 md:mt-[125px]">
          <Image src={'/Side Image.png'} alt='' width={705} height={609} className="w-full md:w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-12 md:mt-24">
        {[
          { image: "/Services.png", number: "10.5k", text: "Sellers active our site" },
          { image: "/Services (1).png", number: "33k", text: "Monthly Product Sale" },
          { image: "/Services (2).png", number: "45.5k", text: "Customer active in our site" },
          { image: "/Services (3).png", number: "25k", text: "Annual gross sale in our site" },
        ].map((item, index) => (
          <div
            key={index}
            className="border-2 text-center w-full sm:w-[270px] h-auto hover:bg-red-500 cursor-pointer hover:text-white p-4"
          >
            <Image src={item.image} alt='' width={80} height={80} className="mx-auto mt-[32px]" />
            <h1 className="text-[24px] md:text-[32px] font-semibold mt-4">{item.number}</h1>
            <p className="text-[14px] md:text-[16px] font-normal">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-12 md:mt-24">
        {[
          { image: "/image 46.png", name: "Tom Cruise", title: "Founder & Chairman" },
          { image: "/image 47.png", name: "Will Smith", title: "Product Designer" },
          { image: "/image 51.png", name: "Emma Watson", title: "Managing Director" },
        ].map((person, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-auto">
              <Image src={person.image} alt='' width={294} height={397} className="mx-auto" />
            </div>
            <h1 className="text-[16px] md:text-[19px] font-bold mt-8">{person.name}</h1>
            <p className="text-[14px] md:text-[17px] font-normal">{person.title}</p>
            <div className="flex justify-center gap-3 mt-3">
              {['/Icon-Twitter.png', '/icon-instagram.png', '/Icon-Linkedin.png'].map((icon, i) => (
                <Image key={i} src={icon} alt='' width={24} height={24} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-8 md:gap-[90px] justify-center mt-12 md:mt-[91px] text-center">
        {[
          { icon: "/Services.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
          { icon: "/Services (4).png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
          { icon: "/Services (2).png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" },
        ].map((service, index) => (
          <div key={index}>
            <Image src={service.icon} alt="" width={60} height={60} className="h-[60px] w-[60px] mx-auto" />
            <h2 className="font-bold text-[16px] md:text-[18px] mt-4">{service.title}</h2>
            <p className="text-[12px] md:text-[15px] mt-2">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
