import React, {useState} from 'react'

import "./Index.css"

export default function Content({ pokemons, setPokemons, pokemonsSave, setPokemonsSave }) {  
  const [input, setInput] = useState("")

  function handleSearch() {     
    setPokemons(pokemonsSave)
    if (input !== "") {
      const search = pokemons.filter((pokemon) => pokemon.name.toUpperCase().includes(input.toUpperCase()) && pokemon)      
      setPokemons(search)        
    }         
  }

    return (
      <div className="topbar__search">
      <input className="topbar__input" type="text" placeholder="Search" onChange={(event) => { setInput(event.target.value) }} />
      <button className="topbar__button" onClick={handleSearch}><i className="fa fa-search"></i></button>
      </div> 
    )  
}