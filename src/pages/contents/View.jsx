import React from 'react'
import Navbar from '../../layouts/components/Navbar'
import CarouselBar from '../../components/carouselBar'
import Home from '../../components/home'
import Footer from '../../layouts/components/Footer'
import Product from './product/Product'

export default function View() {
  return (
    <div>
        <Product/>
        <Navbar/>
        <CarouselBar/>
        <Home />
        <Footer/>
    </div>
  )
}
