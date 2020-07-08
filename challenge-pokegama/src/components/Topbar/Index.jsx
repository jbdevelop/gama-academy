import React from 'react'

import Search from '../Search/Index'

import "./Index.css"

import imgTitle from "../../assets/pokeball.png"

export default function Content({ pokemons, setPokemons, pokemonsSave, setPokemonsSave }) {
  
    
    return (
      <>
      <section className="topbar">          
        <div className="topbar__container"> 
          <h1 className="topbar__title">
            P<img src={imgTitle} alt="Pokeball" className="topbar__img" />KEGAMA STORE
          </h1>  
          <Search 
            pokemons={pokemons} 
            setPokemons={setPokemons} 
            pokemonsSave={pokemonsSave} 
            setPokemonsSave={setPokemonsSave} 
          />       
        </div>      
      </section>
      </>
    )  

}