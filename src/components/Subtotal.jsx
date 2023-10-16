import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../reducers/StateProvider'
import '../styles/subtotal/subtotal.css'
import PaymentIcon from '@mui/icons-material/Payment';
function Subtotal() {
  const [{basket}, dispatch] = useStateValue()
  console.log(basket)
  return (
     <div className="subtotal">
          <div className="subtotal__info">
            <p>Wartość wszystkich rzeczy w koszyku wynosi:</p>
            <CurrencyFormat 
              suffix='zł'
              value={basket.reduce((total, item) => total + item.price * item.quantity ,0)}
              displayType='text'
            />
          </div>
          <button>
            <PaymentIcon />
            Przejdź do płatności
          </button>
      </div>
    
  )
}

export default Subtotal