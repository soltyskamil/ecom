import React from 'react'
import Hero from './Hero'
import { collaboImages } from './images'
function Collaborations() {
  return (
    <>
        <div className="products__section__info">
            <h2>Kolaboracje</h2>
        </div>
    <Hero images={collaboImages}/>
    </>
  )
}

export default Collaborations