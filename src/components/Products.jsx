import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import '../styles/products/products.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
function Products({title}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
          const arr = response.data.slice(0, 20)
          setProducts(arr) 
          setLoading(false)  
        })
    }, [])
  console.log(products)
  return (
    <div className="products__section">
        <div className="products__section__info">
            <h2>{title}</h2>
        </div>
        <div className="products">
            <Carousel 
            responsive={responsive}
            swipeable={true}
            draggable={true}
            >
               {!loading && products.map((item, i) => {
                        return (
                            <Product 
                                id={item.category.id}
                                price={item.price}
                                title={item.title}
                                category={item.category.name}
                                image={item.images[0]}
                                key={i}
                                quantity={1}
                            />
                        )
            })} 
            </Carousel>   
            
        </div>
    </div>
  )
}

export default Products