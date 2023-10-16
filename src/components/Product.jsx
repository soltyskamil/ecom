import React, { useState } from 'react'
import '../styles/products/products.css'
import { useStateValue } from '../reducers/StateProvider'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Product({id, price, title, image, category, quantity}) {
  const [item, dispatch] = useStateValue()

  const addToBasket = () => dispatch({
    type: 'ADD_TO_BASKET',
    item: {
      id: id,
      price: price,
      title: title,
      image: image,
      category: category,
      quantity: quantity
    }
  })
  const addToWishlist = () => dispatch({
    type: 'ADD_TO_WISHLIST',
    item: {
      id: id,
      price: price,
      title: title,
      image: image,
      category: category,
      quantity: quantity
    }
  })
  
  return (
    <div className='product__item'>
        <div className="product__item__wrapper">
          <button onClick={addToWishlist} data-wishlist>
              <FavoriteBorderIcon 
                fontSize='large'
              />
          </button>
          
            <img src={image} alt={title} />
          
        </div>
          <div className="product__item__description">
            <h3>{title}</h3>
            <p>{price}zł</p>
          </div>
          <button onClick={addToBasket} data-basket>
              <ShoppingCartCheckoutIcon />
              <p>Dodaj do koszyka</p>
          </button>
    </div>
  )
}

export default Product