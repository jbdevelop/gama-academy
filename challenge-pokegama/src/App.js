import React from "react"

import Topbar from "./components/Topbar/Index"
import Content from "./components/Content/Index"

import "./App.css"

function App() {
  return (
    <>  
      <div className="container">
        <div className="content">
          <Topbar />
          <Content />
        </div>
        <div className="cart">
          <section>
            <div className="card">
              <h1 className="card__title">Carrinho</h1>

              <div className="card__item">Item</div>
              <div className="card__item">Item</div>
              <div className="card__item">Item</div>

              <div className="card__total">
                <span className="card__total-text">Total</span>  
                <span className="card__total-price">R$ 900</span>  
              </div>

              <button className="card__finish">Finalizar</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App