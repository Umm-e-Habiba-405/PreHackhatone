import React from 'react'
import Headers from '../Components/Headers'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSale'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import BestSellingProducts from '../Components/BestSellingProducts'
import Hero from '../Components/Hero'
import NewArrival from '../Components/NewArrival'

const Home = () => {
  return (
    <div>
    <Headers/>
      <Hero/>
      <FlashSales/>
      <Categories/>
      <BestSellingProducts/>
      <Banner/>
      <Products/>
      <NewArrival/>


    </div>
  )
}

export default Home

