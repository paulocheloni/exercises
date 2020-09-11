import React, {Component} from 'react';
import pokemons from './data'
import Pokemon from './Pokemon'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className='container-list'>
                { pokemons.map(pokemon => 
                    <Pokemon props={pokemon}/>
                )}
            </div>
        )
    }
}

export default Pokedex