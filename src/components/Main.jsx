import React from 'react'
import Hero from './Hero'
import Products from './Products'
import NewArrivals from './NewArrivals'
import Bestsellers from './Bestsellers'
import Jackets from './Jackets'
import Shoes from './Shoes'
import Accesories from './Accesories'
import Skate from './Skate'
import Collaborations from './Collaborations'
import About from './About'
import Newsletter from './Newsletter'
import Footer from './Footer'
import { collaboImages } from './images'
import { sliderImages } from './images'
function Main() {
  return (
    <>
        <Hero images={sliderImages}/>
        <Products title='Wybrane dla Ciebie'/>
        <NewArrivals title='Nowości' images={collaboImages}/>
        <Bestsellers />
        <Jackets /> 
        <Shoes />
        <Accesories />
        <Skate />
        <Collaborations />
        <About />
        <Footer />
    </>
  )
}

export default Main