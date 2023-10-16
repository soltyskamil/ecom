import React from 'react'
import { useStateValue } from '../reducers/StateProvider'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/wishlistproducts/wishlistproduct.css'
function WishlistProduct({id, price, title, image, category, quantity}) {
  const [items, dispatch] = useStateValue()
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
  const removeFromWishlist = () => dispatch({
    type: 'REMOVE_FROM_WISHLIST',
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
    
    <div className="basket__product" data-wishlist>
      <img src={image} alt="item image" />
      <div className="basket__product__info">
        <div className="product__actions__wrapper">
            <div className="product__name">
              <h3>{title}</h3>
              <p style={{color: 'red', fontWeight: 'bold'}}>Czas dostawy do 2 dni roboczych.</p>
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
                    <button onClick={removeFromWishlist}>
                      <DeleteOutlineIcon />
                      <span>Usuń z listy życzeń</span>
                    </button>
                    <button onClick={addToBasket}>
                      <AddShoppingCartIcon />
                      <span>Dodaj do koszyka</span>
                    </button>
                </div>
                <h3>{price}zł</h3>
            </div>
            
            
          </div>
      </div>
    </div>
  )
}

export default WishlistProduct