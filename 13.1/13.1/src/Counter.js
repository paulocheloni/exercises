import React from 'react';
import CounterDisplay from './CounterDisplay'

class Counter extends React.Component {
    constructor() {
      super();
      this.state = {
          unity : 1,
          group : 0,
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((previousunity) =>  ({unity : previousunity.unity + 1 }),
        () => {
            if (this.state.unity === 10) {
            this.setState((previousunity) => (
                {
                    unity: previousunity.unity - 9,
                    group: previousunity.group + 1 
                }),
                () => 
                {
                    if (this.state.group === 10) {
                        this.setState((previousunity) => ({
                            unity: 0,
                            group: 0
                        }))
                    }
                })
        }})        
    }    

    render() {
        const { unity, group } = this.state
        if (group > 0 && unity === 6) { 
            return (
                <div>contador
                    <button onClick={() => this.handleClick()}>soma</button>
                    <CounterDisplay value={`não irei renderizar nada`} />
                </div>
            )
            
        }
        return(
            <div>contador
                <button onClick={() => this.handleClick()}>soma</button>
                <CounterDisplay value={`${group}-${unity}`} />
            </div>
            
        )
    }
}

export default Counter  