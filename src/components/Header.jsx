import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/header/header.css'
import { NavLink } from 'react-router-dom';
import { height } from '@mui/system';
function Header() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 41){
      document.querySelector('.header__wrapper').style.cssText  = 'position: fixed; z-index: 9999'
      document.querySelector('.ul__wrapper[data-area=desktop]').style.display = 'block'
      document.querySelector('.ul__wrapper[data-area=mobile]').style.display = 'none'
      document.querySelector('.placeholder').style.display = 'block'
    }else{
      document.querySelector('.header__wrapper').style.position = ''
      document.querySelector('.ul__wrapper[data-area=desktop]').style.display = 'none'
      document.querySelector('.ul__wrapper[data-area=mobile]').style.display = 'block'
      document.querySelector('.placeholder').style.display = 'none'
    }
  })
  const menuHandler = () => {
    document.querySelector('.ul__wrapper[data-area=mobile]').style.display = 'block'
    document.querySelector('.nav__center[data-area=mobile]').classList.toggle('block')
  }
  const menuClose = () => {
    const nav = document.querySelector('.nav__center[data-area=mobile]')
    nav.classList.add('slide__out')
    nav.addEventListener('animationend', () => {
      nav.classList.remove('block')
      nav.classList.remove('slide__out')
    }, { once: true })}

  return (
    <div className='header__wrapper'>
      <header>
        <div className="header__upper">
          <div className="logo__left">
              <NavLink to='/'><img src="src\assets\logo\logoo.svg" alt="logo" id='logo'/></NavLink>
          </div>
        <div className="nav__center" data-area='des ktop'>
        
          <div className="ul__wrapper" data-area='desktop'>
            <ul className='ul__desktop'>
              <li><NavLink>Nowości</NavLink></li>
              <li><NavLink>Kategorie</NavLink></li>
              <li><NavLink>Marki</NavLink></li>
              <li><NavLink>Kolaboracje</NavLink></li>
              <li><NavLink>Wyprzedaż</NavLink></li>
            </ul>
          </div>
          
        
        </div>
          <div className="nav__right">
            <div className="search__bar upper">
              <SearchIcon />
              <input type="text" />
            </div>
            <NavLink to='/account'><PersonOutlineIcon /></NavLink>
            <NavLink to='/wishlist'><FavoriteBorderIcon /></NavLink>
            <NavLink to='/basket'><ShoppingCartCheckoutIcon /></NavLink>
          </div>
        </div>
        <div className="header__lower"> 
          <div className="menu__hamburger lower">
            <MenuIcon 
              fontSize='large'
              onClick={menuHandler}
            />
          </div>
          <div className="search__bar lower">
              <SearchIcon />
              <input type="text" />
          </div>
        </div>
       
      <div className="nav__center" data-area='mobile'>
        <div className="menu__wrapper">
          <div className="menu__close">
            <CloseIcon 
              onClick={menuClose}
              fontSize='large'
            />
          </div>
          <div className="ul__wrapper" data-area='mobile'>
            <ul className='ul__desktop'>
              <li><NavLink>Nowości</NavLink></li>
              <li><NavLink>Kategorie</NavLink></li>
              <li><NavLink>Marki</NavLink></li>
              <li><NavLink>Kolaboracje</NavLink></li>
              <li><NavLink>Wyprzedaż</NavLink></li>
            </ul>
          </div>
          
          <ul className="ul__mobile">
            <li>
              <NavLink>
                Buty
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
                Koszulki
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Koszule
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Bluzy
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Kurtki
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Szorty
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Spodnie
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Longsleeve
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Czapki
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Plecaki / Torby
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Akcesoria
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Kolaboracje
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Deskorolka
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Longboard
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Snowboard
              </NavLink>
              <ExpandMoreIcon/>
            </li>
            <li>
              <NavLink>
              Karty podarunkowe
              </NavLink>
              <ExpandMoreIcon/>
            </li>
          </ul>
        </div>
      </div>
      </header>
    </div>
  )
}

export default Header