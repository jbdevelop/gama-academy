import React, {useState, useEffect} from "react"

import Swal from 'sweetalert2'

import "./Index.css"

import imageCart from "../../assets/background1.png"

export default function Cart({ itemCart, setItemCart }) {
  const [totalCart, setTotalCart] = useState(0)
  //console.log('itemCart Cart', itemCart)
  
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

  function handleCleanCart() {
    setItemCart([])
  }

  return (
    <>  
      <div className="cart">
        <section>
          <div className="cart__container">
            <h1 className="cart__title"><i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;</h1>
                      
            <ul className="cart__list">
              { itemCart.map((item, index) => (
                  <li key={index} className="cart__item">
                    <span>{item.name}</span>
                    <span>{Number((item.price).toFixed(2))} 
                    <button className="cart__remove" onClick={handleRemoveItemCart} id={index}><i className="fa fa-close"></i></button>
                    </span>                  
                  </li>                                              
                )) 
              }
            </ul>
            
            <div className="cart__total">
              <span className="cart__total-text">Total</span>                                      
              <span className="cart__total-price">{totalCart}</span>
              
            </div>

            <button className="cart__clean" onClick={handleCleanCart}>
              Empty Cart
            </button>
            <button className="cart__finish" onClick={handleBuyNow} disabled={ totalCart === '0.00' ? true : false }>
              Buy Now
            </button>

          </div>
        </section>

        <div className="cart__image">
            <img src={imageCart} alt="Charizard"/>
        </div>
      </div>
    </>
  )
}


