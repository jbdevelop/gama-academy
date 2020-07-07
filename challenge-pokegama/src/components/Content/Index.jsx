import React, {useState, useEffect, useGlobalState} from 'react'

import "./Index.css"
import api from "../../services/api"
import axios from 'axios'


export default function Content({ itemCart, setItemCart }) {

  const [pokemons, setPokemons] = useState([])
  //const [itemCart, setItemCart] = useState([])


  async function handleGetApi(query) {
    const { url, limit  } = query
    return await api.get(
      `${url}?limit=${limit}`
    )
  }
  
  useEffect(() => {          
    async function getPokemonForm() {
      const query = {
        url: `pokemon`,
        limit: 10000
      }
      const apiData = await handleGetApi(query)           
      const { results } = apiData.data  

      let request = []

      results.forEach(element => {                         
        request.push(
          axios.get(`${element.url}`)
          .then(response => response.data )                
        )          
      });

      const response = await axios.all(request);      

      const pokemonsList = response.map(pokemon => {             
        const price = Number((Math.random() * 500 + 1).toFixed(2))
        return { 
          id: pokemon.id,
          name: pokemon.name,
          sprite: pokemon.sprites.front_default,
          price
        }        
      })
      console.log('List', pokemonsList)

      const pokemonsListOk = pokemonsList.filter(pokemon => pokemon.sprite !== null)            

      setPokemons(pokemonsListOk)      
    }
    getPokemonForm()          
  }, [])

  function handleAddToCart(event) {
    const id = Number(event.target.id)

    //console.log('ID', id)  
    //console.log('Lista pokemons', pokemons)
    const item = pokemons.filter(pokemon => pokemon.id === id)   
    
    console.log('ITEM', item)

    setItemCart([...itemCart, item[0]])  
    
    //setTotalCart([])

  }
  
  return (   
    <>
      <section className="list">
          <ul>
            { pokemons.map((pokemon, index) => (
              <li key={index}>   
                <div className="card">
                  <div className="card__content">
                    <img src={pokemon.sprite}/>   
                    {pokemon.name}<br/>                    
                    <strong>{pokemon.price}</strong>                 
                  </div>                                      
                  <div className="card__footer">
                    <button className="card__button" onClick={handleAddToCart} id={pokemon.id}>
                      Add to cart &nbsp;   
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>               
              </li>
            ))                
            } 
          </ul>            
      </section>
    </>
  )  

}