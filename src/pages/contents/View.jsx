import React from 'react'
import Navbar from '../../layouts/components/Navbar'
import CarouselBar from '../../components/carouselBar'
import Home from '../../components/home'
import Footer from '../../layouts/components/Footer'

export default function View() {
  return (
    <div>
        <Navbar/>
        <CarouselBar/>
        <Home />
        <Footer/>

    </div>
  )
}
