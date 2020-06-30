import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import randomcolor from 'randomcolor'


function App() {
  const [color, setColor] = useState(randomcolor)

  const colorChange = () => {
    setColor(randomcolor)
  }

  return (
    <div className="App">
      <h1 style={{color: color}}> Movie App In The Making</h1>
      <button onClick={colorChange}>Click Me!</button>
    </div>
  );
}

export default App;
