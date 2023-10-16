import React from 'react'
import '../styles/uppernav/uppernav.css'
function Uppernav() {
  return (
    <div className="upper_nav">
        <div className="upper_nav_left">
            <a href="#">Pomoc</a>
            <a href="#">Kontakt</a>
            <a href="#">O nas</a>
        </div>
        <div className="upper_nav_center">
            <p>Darmowa dostawa od 250zł</p>
        </div>
        <div className="upper_nav_right">
            <a href="#">Zwroty i reklamacje</a>
        </div>
    </div>
  )
}

export default Uppernav