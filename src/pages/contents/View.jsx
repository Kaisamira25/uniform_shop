import React from 'react'
import Navbar from '../../layouts/components/Navbar'
import Login from './login/login'
import Register from './register/register'


export default function View() {
  return (
    <div>
       <Navbar/>
       <Login/>
       <Register/>
    </div>
  )
}
