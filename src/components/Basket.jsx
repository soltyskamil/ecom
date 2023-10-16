import Subtotal from './Subtotal'
import '../styles/basket/basket.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../reducers/StateProvider'
function Basket() {
  const [{basket}, dispatch] = useStateValue()
  return (
    <>  
      <div className="placeholder"></div>
      <div className="products__section__info">
            <h2>Twój koszyk</h2>
        </div>
        {basket.length >= 1 
        
        ? <div className="basket">
            <div className="left__section">
                <div className="basket__products">
                    {basket.map((item, i) => (
                      <CheckoutProduct 
                        id={item.id}
                        price={item.price}
                        title={item.title}
                        category={item.name}
                        image={item.image}
                        key={i}
                        quantity={1}
                      />
                    ))}
                </div>
            </div>
            <div className="right__section">
                <Subtotal />
            </div>
        </div>
        :<p style={{textAlign: 'center', margin: '0', fontSize: '1.25rem'}}>Twój koszyk jest pusty</p>
        }
      
    </>
    
  )
}

export default Basket