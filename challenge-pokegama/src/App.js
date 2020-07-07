import React, {useState} from "react"

import Topbar from "./components/Topbar/Index"
import Content from "./components/Content/Index"
import Cart from "./components/Cart/Index"

import "./App.css"

export default function App() {
  const [itemCart, setItemCart] = useState([])

  return (
    <>  
      <div className="container">
        
        <div className="content">
          <Topbar />
          <Content itemCart={itemCart} setItemCart={setItemCart} />
        </div>

        <Cart itemCart={itemCart} />
      
      </div>
    </>
  )
}
