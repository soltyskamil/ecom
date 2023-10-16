import React from 'react'
import '../styles/newarrivals/newarrivals.css'
import Products from './Products'
function NewArrivals({title, images}) {
  return (
    <div className='new__arrivals'>
        <h2>{title}</h2>
        <div className="new__arrivals__items">
            {images.map((item, i) => (
              <div className="new__arrivals__item" key={i}>
                <img src={item} alt='item img' />
              </div>
            ))}
        </div>
        <Products title=''/>
    </div>
  )
}

export default NewArrivals