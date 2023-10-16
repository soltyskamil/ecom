import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../styles/newsletter/newsletter.css'
function Newsletter() {
  return (
    <div className="newsletter__section">
        <div className="newsletter__wrapper">
            
        </div>
        <div className="newsletter__section__info">
            <h3>Ej ty!</h3>
            <p>Wpisuj maila i zgarniaj info o najnowszych dropach i promkach!</p>
        </div>
        <div className="newsletter__section__discounts">
            <ul>
                <div className="ul__wrapper">
                    <li>Nowości</li>
                    <li>Zniżki %</li>
                    <li>Wyprzedaże %</li>
                </div>
            </ul>
        </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input__section">
                    <input type="email" placeholder='Email'/>
                    <button>Zapisz</button>
                </div>
            </form>
    </div>
  )
}

export default Newsletter