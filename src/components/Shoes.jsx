import React from 'react'
import Products from './Products'
import image1 from '../assets/shoes/shoes (3).jpg'
import image2 from '../assets/shoes/shoes (2).jpg'
import '../styles/shoes/shoes.css'
function Shoes() {
  return (
    <div className='shoes__section'>
        <div className="products__section__info" data-shoes>
            <h2>Buty</h2>
        </div>  
        <div className="shoes__grid">
            <div className="shoes__grid__item"><img src={image1} alt="shoe" /></div>
            <div className="shoes__grid__item"><img src={image2} alt="shoe" /></div>
        </div>
        <Products/>
    </div>
  )
}

export default Shoes