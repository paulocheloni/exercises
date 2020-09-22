import React from 'react';

class CounterDisplay extends React.Component {
    render () {
        const { value } = this.props;
        return (
        <span>{value}</span>
        )
    }
}

export default CounterDisplay