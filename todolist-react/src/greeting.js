import React from 'react';

class Greeting extends React.Component {
  render() {
    const {greeting, name} = this.props
  return <h1>{greeting} {name}</h1>;
  }
}

export default Greeting;