import React from 'react'
import { useStateValue } from '../reducers/StateProvider'
import WishlistProduct from './WishlistProduct'
function Wishlist() {
    const [{wishlist}, dispatch] = useStateValue()
    return (
        <div>
            <div className="placeholder"></div>
            <div className="products__section__info">
                <h2>Twoja lista życzeń</h2>
            </div>
            {wishlist.length >= 1 
            
            ?   wishlist.map((item, i) => (
                    <WishlistProduct 
                        key={i}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        image={item.image}
                        category={item.category}
                        quantity={1}
                    />
                ))
                :<p style={{textAlign: 'center', margin: '0', fontSize: '1.25rem'}}>Twoja lista życzeń jest pusta</p>   
        }
            
            
        </div>
  )
}

export default Wishlist