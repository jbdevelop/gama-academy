import React, {useState, useEffect} from "react"

import "./Index.css"

export default function Cart({ itemCart }) {

  const [totalCart, setTotalCart] = useState(0)

  console.log('itemCart Cart', itemCart)
  
  useEffect(() => {

    const total = itemCart.reduce((accum, { price }) => accum + price, 0).toFixed(2)
//    console.log('UseEffect Total', total)
    setTotalCart(total)

  }, [itemCart])

  return (
    <>  
      <div className="cart">
      <section>
        <div className="cart__container">
          <h1 className="cart__title">Carrinho</h1>
          
          
          <ul className="cart__list">
            { itemCart.map((item, index) => (
                <li key={index} className="cart__item">
                  <span>{item.name}</span>
                  <span>{Number(item.price).toFixed(2)}</span>
                </li>                                              
              )) 
            }
          </ul>
          

          <div className="cart__total">
            <span className="cart__total-text">Total</span>                                      
            <span className="cart__total-price">{totalCart}</span>
            
          </div>

          <button className="cart__finish">
            Finalizar
          </button>
        </div>
      </section>
      </div>
    </>
  )
}


