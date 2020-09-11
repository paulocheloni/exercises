import React, {Component} from 'react';
import logo from './pokedex.png'

class Logo extends Component {
    render() {
        return (
            <div className='container-logo'>
                <img className='App-logo' src={logo} alt='logo pokedex'/>
            </div>
            
        )
    }
}

export default Logo