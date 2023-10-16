import React from 'react'
import Hero from './Hero'
import { jacketImages } from './images'
function Jackets() {
  return (
    <>
        <div className="products__section__info">
            <h2>Kurtki</h2>
        </div>
        <Hero images={jacketImages}/>
    </>
  )
}

export default Jackets