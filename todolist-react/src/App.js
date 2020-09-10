import React, {Component} from 'react';
import Greeting from './greeting'
import './App.css';

class App extends Component  {
  render() {
    const users = [ 
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
      greeting: 'oi'
    },
    {
      id: 103,
      name: "Joãos",
      email: "joaos@gmail.com",
      avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
      greeting: 'ola'
    }]

    return (
      <div className='App'>
        {users.map(user => <Greeting greeting={user.greeting} name={user.name} />)}
      </div>
    )
  }
}

export default App;
