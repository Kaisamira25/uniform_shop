import React from 'react'
import Navbar from '../../layouts/components/Navbar'

import Footer from '../../layouts/components/Footer'
import CarouselBar from '../../components/_CarouselBar'
import Home from './home/home'
import Login from './login/login'

export default function View() {
  return (
    <div>

        <Navbar/>
      <Login/>
        <Footer/>
    </div>
  )
}
