"use client"
import React from "react";

import Hero from "./Components/Hero";
import FlashSales from "./Components/FlashSale";
import Categories from "./Components/Categories";
import BestSellingProducts from "./Components/BestSellingProducts";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import NewArrival from "./Components/NewArrival";

import Header from "./Components/Header";



export default function Home({ Component, pageProps }: any) {
  return (
    <div>
      
       <Header/>
       <Hero/>
    <FlashSales/>
    <Categories/>
    <BestSellingProducts/>
    <Banner/>
    <Products/>
    <NewArrival/>
    
    

    </div>

  );
}
