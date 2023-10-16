import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer/footer.css'
function Footer() {
  return (
    <footer>
        <div className="footer__section">
            <ul>
                <li data-list>Jak kupować?</li>
                <li data-list>Wysyłka</li>
                <li data-list>Zwroty i reklamacje</li>
                <li data-list>Płatności</li>
                <li data-list>Faq</li>
            </ul>
        </div>
        <div className="footer__section">
            <ul>
                <li data-list>Regulamin</li>
                <li data-list>Polityka Prywatności</li>
                <li data-list>Karty Selecta</li>
                <li data-list>Karta Podarunkowa</li>
                <li data-list>Polityka cookies</li>
            </ul>
        </div>
        <div className="footer__section">
            
            <p>
                Pon. – Pt. w godz. 8:00 – 16:00
                <br />
                INFOLINIA: Tel. 530 597 955 info@selectshop.pl
            </p>
            <br />
            <ul>
                <li>selectshop.pl</li>
                <li>ul. Boya-Żeleńskiego 11,</li>
                <li>35-105 Rzeszów</li>
            </ul>
        </div>
        <div className="footer__section" data-payments>
            <ul className='payments'>
                <li><img src="https://selectshop.pl/modpub/_ss/_layout/imgs/services-blik.png" alt="payment method" /></li>
                <li><img src="https://selectshop.pl/modpub/_ss/_layout/imgs/services-payu.png" alt="payment method" /></li>
                <li><img src="https://selectshop.pl/modpub/_ss/_layout/imgs/services-paynow.png" alt="payment method" /></li>
                <li><img src="https://selectshop.pl/modpub/_ss/_layout/imgs/services-quarticon.png" alt="payment method" /></li>
            </ul>
        </div>
        <div className="footer__section">
            <div className="logo__footer">
                <img src="src\assets\logo\logoo.svg" alt="logo" />
            </div>
            <div className="socials__footer">
                <FacebookIcon/>
                <YouTubeIcon />
                <InstagramIcon />
            </div>
        </div>
    </footer>
  )
}

export default Footer