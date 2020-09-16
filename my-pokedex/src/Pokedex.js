import React, {Component} from 'react';
import pokemons from './data'
import Pokemon from './Pokemon'
import './Pokedex.css'

class Pokedex extends Component {
    constructor() {
        super()
        this.state = {
            currentIndexPoke : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        
        this.setState((previousIndex) => (
            {
            currentIndexPoke :  previousIndex.currentIndexPoke + 1
        }))
        
        if(this.state.currentIndexPoke >= pokemons.length - 1) {
            this.setState((previousIndex) =>({
                currentIndexPoke : 0
            })) 
        }
        
    }


    render() {
        return (
            <div>                       
                <div className='container-list'>
                { pokemons.filter( (pokemon, index) => this.state.currentIndexPoke === index                        
                ).map(pokemon => <Pokemon props={pokemon}/>)}
                </div>
                <button onClick={this.handleClick}>Next</button> 
            </div>
                    
        )
    }
}

export default Pokedex