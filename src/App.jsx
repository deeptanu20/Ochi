

import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Marki from './Component/Marki'
import About from './Component/About'
import Eyes from './Component/Eyes'
import Featured from './Component/Featured'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Project from './Component/Project'
import Eyest from './Component/Eyest'

function App() {

  const locomotiveScroll= new LocomotiveScroll();
  return (
    <div className= ' w-full min-h-screen bg-zinc-900 text-white' >
        <Navbar/>
        <Landing/>
        <Marki/>
        <About/>
        <Eyes/>
        <Featured/>
        <Project/>
        <Cards/>
         
        <Footer/>
        <Eyest/>
       
     
    </div>
  )
}

export default App

