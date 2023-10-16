import React from 'react'
import NewArrivals from './NewArrivals'
import '../styles/accesories/accesories.css'
import { accesoriesImages } from './images'
function Accesories() {
  return (
    <div className='accesories__section'>
        <NewArrivals title='Akcesoria' images={accesoriesImages}/>
    </div>
  )
}

export default Accesories