import React from 'react'
import typesColor from '../colorscheme/poketypescolor'

function Pokecard (props) {
    return (
        <div className="pokecard">
            <div className="poke-img">
                <img src={props.pokemon.sprites.front_default} alt=""/>
            </div>
            <div className="pokecard-name">
                {props.pokemon.name}
            </div>
            <div className="pokecard-types">
                {props.pokemon.types.map(allTypes => {
                    return (
                        <div className="pokecard-type" style={{backgroundColor : typesColor[allTypes.type.name] }}>
                            {allTypes.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="pokecard-info">
                <center>
                <div className="pokecard-data ">
                    <p className="title">Weight</p>
                    <p>{props.pokemon.weight}</p>
                </div>
                <div className="pokecard-data ">
                    <p className="title">Height</p>
                    <p>{props.pokemon.height}</p>
                </div>
                <div className="pokecard-data ">
                    <p className="title">Strong Ability</p>
                    <p>{props.pokemon.abilities[0].ability.name}</p>
                </div>
                </center>                
            </div>
        </div>
    )
}

export default Pokecard
