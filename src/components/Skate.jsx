import React from 'react'
import Hero from './Hero'
import { skateImages } from './images'
function Skate() {
  return (
    <>
    <div className="products__section__info">
        <h2>Skate</h2>
    </div>
    <Hero images={skateImages}/>
</>
  )
}

export default Skate