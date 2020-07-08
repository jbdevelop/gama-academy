import React, {useState, useEffect} from "react"

import Swal from 'sweetalert2'

import "./Index.css"

export default function CartTop({ itemCart, setItemCart }) {
  const [totalCart, setTotalCart] = useState(0)
 
  useEffect(() => {
    const total = itemCart.reduce((accum, { price }) => accum + price, 0)
    setTotalCart(total.toFixed(2))
  }, [itemCart])
  
  function handleRemoveItemCart(event) {    
    const { id } = event.currentTarget
    
    const removed = itemCart.filter((item, index) => index !== Number(id))
    setItemCart(removed)
  }

  function handleBuyNow() {
    Swal.fire({
      title: 'Great! You bought pokemons!',
      text: 'Now, go to the Arena!',
      icon: 'success',
      confirmButtonText: 'Cool'
    })

    setItemCart([])
  }

  return (
    <>  
      <div className="cartTop">
        <section>
          <div className="cartTop__container">
            <h1 className="cartTop__title"><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;</h1>
                      
            <ul className="cartTop__list">
              { itemCart.map((item, index) => (
                  <li key={index} className="cartTop__item">
                    <span>{item.name}</span>
                    <span>{Number((item.price).toFixed(2))} 
                    &nbsp;&nbsp;<button className="cartTop__remove" onClick={handleRemoveItemCart} id={index}><i className="fa fa-close"></i></button>
                    </span>                  
                  </li>                                              
                )) 
              }
            </ul>
            
            <div className="cartTop__total">
              <span className="cartTop__total-text">Total</span>                                      
              <span className="cartTop__total-price">{totalCart}</span>
              
            </div>

            <button className="cartTop__finish" onClick={handleBuyNow} disabled={ totalCart === '0.00' ? true : false }>
              Buy Now
            </button>
          </div>
        </section>
      </div>
    </>
  )
}


