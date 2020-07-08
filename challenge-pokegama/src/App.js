import React, {useState} from "react"

import Topbar from "./components/Topbar/Index"
import Content from "./components/Content/Index"
import Cart from "./components/Cart/Index"
import CartTop from "./components/CartTop/Index"

import "./App.css"

export default function App() {
  const [itemCart, setItemCart] = useState([])  
  const [pokemons, setPokemons] = useState([])
  const [pokemonsSave, setPokemonsSave] = useState([])


  return (
    <>  
      <div className="container">
        
        <div className="content">
          <CartTop itemCart={itemCart} setItemCart={setItemCart} />
          
          <Topbar 
            pokemons={pokemons} 
            setPokemons={setPokemons} 
            pokemonsSave={pokemonsSave}
            setPokemonsSave={setPokemonsSave}  
          />
          <Content 
            itemCart={itemCart} 
            setItemCart={setItemCart} 
            pokemons={pokemons} 
            setPokemons={setPokemons} 
            setPokemonsSave={setPokemonsSave}
          />
        </div>

        <Cart itemCart={itemCart} setItemCart={setItemCart}/>
      
      </div>
    </>
  )
}
