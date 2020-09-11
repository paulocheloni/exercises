import React, {Component} from 'react'
import './Pokemon.css'

class Pokemon extends Component {
    render() {
        const {averageWeight, name, type, image} = this.props.props
        
        return (
            <li className='container-poke'>
                <ul className='poke-props'>
                    <li className='poke-image'>
                      <img src={image} alt={`pokemon ${name}`} ></img>  
                    </li>
                    <li className='poke-prop'>
                        name: {name}
                    </li>
                    <li className='poke-prop'>
                        weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
                    </li>
                    
                    <li className='poke-prop'>
                        type: {type}
                    </li>
                </ul>
            </li>
        )
    }
}

export default Pokemon