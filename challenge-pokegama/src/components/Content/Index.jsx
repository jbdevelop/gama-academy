import React, {useState, useEffect, useLayoutEffect} from 'react'

import "./Index.css"
import api from "../../services/api"
import axios from 'axios'


export default function Content() {
  const [pokemons, setPokemons] = useState([])

  async function handleGetApi(query) {
    const { url, limit  } = query
    return await api.get(
      `${url}?limit=${limit}`
    )
  }



/*   async function getPokemons() {                               
    const query = {
      url: pokemons[0],
      limit: 10000
    }  
    const apiData = await handleGetApi(query)
    console.log(apiData) 
  } */

  useEffect(() => {          
    async function getPokemonForm() {
      const query = {
        url: `pokemon`,
        limit: 10000
      }
      const apiData = await handleGetApi(query)           
      const { results } = apiData.data  
      console.log('results', results)    

      let request = []

      results.forEach(element => {                         
        request.push(
          axios.get(`${element.url}`)
          .then(response => response.data )                
        )          
      });

      const response = await axios.all(request);      

      const pokemonsList = response.map(pokemon => {             
        return { 
          name: pokemon.name,
          sprite: pokemon.sprites.front_default
        }        
      })
      console.log('List', pokemonsList)

      const pokemonsListOk = pokemonsList.filter(pokemon => pokemon.sprite !== null)            

      setPokemons(pokemonsListOk)      
    }
    getPokemonForm()          
    console.log('Passou no useEffect')   
  }, [])

  
    return (
      <>
        <section className="list">
            <ul>
              { pokemons.map((pokemon, index) => (
                <li key={index}>
                  
                  <img src={pokemon.sprite}/>
                  {pokemon.name}<br/>                    
                
                </li>
              ))                
              } 
            </ul>            
        </section>
      </>
    )  

}