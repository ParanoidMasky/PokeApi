import React, { Component } from 'react'
import Pokebar from '../modules/pokebar'
import { Link } from "react-router-dom";
import Pokeball from '../colorscheme/pokeball.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Pokebar></Pokebar>
                <center>
                <h1> Click the Pokeball to start the pokedex</h1>
                <div className="pokeball">
                    <Link to={'/List'}><img src={Pokeball} alt="Click here"/></Link>
                </div>
                </center>
            </div>
        )
    }
}
