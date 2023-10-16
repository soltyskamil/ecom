import React from 'react'
import { useState } from 'react';
import '../styles/hero/hero.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import image1 from '../assets/slider/hero.jpg'
// import image2 from '../assets/slider/slider (2).jpg'
// import image3 from '../assets/slider/slider (3).jpg'
// import image4 from '../assets/slider/slider (4).jpg'
// import image5 from '../assets/slider/slider (5).jpg'
function Hero({images}) {
  // const images = [image1, image2, image3, image4, image5]
  const [prevIndex, setPrevIndex] = useState(-1)
  const [activeIndex, setActiveIndex] = useState(0)
  const prevSlide = () => {
    if(activeIndex > 0){
      setPrevIndex(activeIndex)
      setActiveIndex(prev => prev - 1)
    }
    
  }

  const nextSlide = () => {
    if(activeIndex < images.length - 1){
      setPrevIndex(activeIndex)
      setActiveIndex(prev => prev + 1)
    }
  }
  return (
    <>
      <div className="placeholder"></div>
        <div className="hero__section" data-carousel>
          <div className="buttons_slider">
            <button 
              data-carousel-button='prev' 
              onClick={prevSlide} 
              style={activeIndex === 0 ? {backgroundColor: 'rgba(0, 0, 0, .3)'} : {}}>
              <ChevronLeftIcon />
              </button>
            <button 
              data-carousel-button='next' 
              onClick={nextSlide} 
              style={activeIndex === images.length - 1 ? {backgroundColor: 'rgba(0, 0, 0, .3)'} : {}}>
              <ChevronRightIcon />
              </button>
          </div>
          <ul data-slides>
            {images.map((item, i) => (
              <li key={i} className='slide'>
                <img src={item} alt="sliderimg" className={`sliderimg 
                ${
                  i === activeIndex ? 'activeSlide' : 
                  i === prevIndex ? 'prevSlide' : ''
                }`}
                />
              </li>
            ))}
          </ul>
        </div>
    </>
      
  )
}

export default Hero