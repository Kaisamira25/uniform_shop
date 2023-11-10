import React from 'react'
import Navbar from '../../layouts/components/Navbar'
import CarouselBar from '../../components/carouselBar'
import Home from '../../components/home'

export default function View() {
  return (
    <div>
        <Navbar/>
        <CarouselBar/>
        <Home />
    </div>
  )
}
