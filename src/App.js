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
              <header className="App-header">
        <div className="welcome-section">
          <h1>Hello!</h1>
          <p>
            My name is Tyler Will, I am a Full-Stack developer based out of Austin, Texas. 
            I have professional experience working at General Motors in the Motorsports Organization developing
            web-based applications to run race simulations for NASCAR, Indy, Truck, Xfinity, and Formula 1.
          </p>
          <p>
            I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and 
            intuitively implemented UX.
          </p>
        </div>
        <div className="projects-section">
          <h2>Projects</h2>
          <ul>
            <li><a href="#domposer">Domposer</a></li>
            <li><a href="#cookiemunch">Cookiemunch</a></li>
            <li><a href="#screentime">Screen time converter</a></li>
            <li><a href="#ledmulti">LED multi</a></li>
            <li><a href="#inlinesvg">inline.svg</a></li>
          </ul>
        </div>
      </header>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <button onClick={clickMe} className={"test-button"}>
              {count}
            </button> */}
                  <footer className="App-footer">
        <p>©2024 tylerwill.dev@gmail.com</p>
      </footer>
          </div>
  );
}

export default App;
