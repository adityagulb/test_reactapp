import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App" >
      <h1> Clicked {count} times </h1>
      <button  className="App-Button" onClick = {()=> setCount(count + 1)}>Click Here</button>
      <br></br>
      <button className="App-Button" onClick = {()=> setCount(0)}  >Reset</button>
    </div>
  );
}

export default App;
