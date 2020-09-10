import React from 'react';
import logo from './logo.svg';
import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['peteca', 'volley'];
  return <div> {compromissos.map(meet => task(meet))} </div>
}

export default App;
