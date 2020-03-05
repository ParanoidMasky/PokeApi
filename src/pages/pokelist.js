import React, { useState, useEffect } from 'react'
import { getPokemons, getSinglePokemon } from '../services/pokeservices'
import Pokecard from '../modules/pokecard'
import Pokebar from '../modules/pokebar'
import { Link } from "react-router-dom";

function Pokelist() {
    
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [load, setLoad] = useState('')
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {

        //get poke data
        async function fetchData() {
            let res = await getPokemons(apiUrl)
            console.log(res)
            setNextUrl(res.next)
            setPrevUrl(res.previous)
            let everyPokemon = await pokeLoad(res.results)
            console.log(everyPokemon)
            setLoad(false)
        }
        fetchData()

    }, [])

    const next = async () => {
        setLoad(true)
        let data = await getPokemons(nextUrl)
        await pokeLoad(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoad(false)
    }

    const prev = async () => {
        if (!prevUrl) return
        setLoad(true)
        let data = await getPokemons(prevUrl)
        await pokeLoad(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoad(false)
    }
    
    //get every single pokemon to list
    const pokeLoad = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokeList = await getSinglePokemon(pokemon.url)
            return pokeList
        }))

        setPokemonData(_pokemonData)

    }

    console.log(pokemonData)

    return (
        <div>
            { 
                load ? 
                <> 
                    <Pokebar></Pokebar> 
                    <center><h1>Loading Pokemon Data...</h1></center>
                </>

                 : (
                    <>
                    <Pokebar></Pokebar>
                    <div className="btn">
                        <button onClick={prev}> -- Prev. </button>
                        <Link to={'/Home'}><button> Home. </button></Link>
                        <button onClick={next}> Next. -- </button>
                    </div>
                        <div className="grid-container">
                            { pokemonData.map((pokemon, i) => {
                                return <Pokecard key={i} pokemon={pokemon}/>
                            } ) } 
                        </div>

                    <div className="btn">
                        <button onClick={prev}> -- Prev. </button>
                        <button onClick={next}> Next. -- </button>
                    </div>
                    </>
                ) 
            }
        </div>
    )
}

export default Pokelist
