import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[count, setCount] = useState(0);


  function clickMe() {
    setCount(count + 1);
  }
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
    <button onClick={clickMe} className={"test-button"}>
      {count}
    </button>
    </div>
  );
}

export default App;
