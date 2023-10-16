import React from 'react'
import { useState } from 'react';
import { useStateValue } from '../reducers/StateProvider'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function CheckoutProduct({id, price, title, image, category, quantity}) {
  const [itemQuantity, setItemQuantity] = useState(1)
  const [items, dispatch] = useStateValue()
  const quantityHandler = (value) => {
    if(value === 0 || value === 10) return
    setItemQuantity(value)
    handleQuantity(value)
  }
  const removeItem = () => dispatch({
    type: 'REMOVE_ITEM',
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
  const handleQuantity = (value) => dispatch({
    type: 'CHANGE_QUANTITY',
    item: {
      id: id,
      price: price,
      title: title,
      image: image,
      category: category,
      quantity: Number(value) 
    }
  })
  return (
    <div className="basket__product" >
      <img src={image} alt="item image" />
      <div className="basket__product__info">
        <div className="product__actions__wrapper">
            <div className="product__name">
              <h3>{title}</h3>
              <p style={{color: 'red', fontWeight: 'bold'}}>Czas dostawy do 2 dni roboczych.</p>
            </div>
            <div className="select__quantity">
              <input type="number" 
              value={itemQuantity} 
              onChange={(e) => quantityHandler(e.target.value)} 
              />
              <div className="quantity__buttons">
                <button onClick={() => quantityHandler(itemQuantity + 1)}><ArrowDropUpIcon /></button>
                <button onClick={() => quantityHandler(itemQuantity - 1)}><ArrowDropDownIcon /></button>
              </div>
            </div>
          </div>
          <div className="product__info">
            <p>Id produktu: {id}</p>
            <p>Kolor: </p>
            <p>Producent: </p>
            <p>Płeć: </p>
            <p>Kategoria: {category}</p>
          </div>
          <div className="product__actions__price">
            <div className="product__actions__wrapper">
              <div className="action__buttons">
                    <button onClick={removeItem}>
                      <DeleteOutlineIcon />
                      <span>Usuń produkt</span>
                    </button>
                    <button onClick={addToWishlist}>
                      <FavoriteBorderIcon />
                      <span>Na listę życzeń</span>
                    </button>
                </div>
                <h3>{price}zł</h3>
            </div>
            
            
          </div>
      </div>
    </div>
  )
}

export default CheckoutProduct