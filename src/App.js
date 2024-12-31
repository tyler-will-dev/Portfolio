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
              </div>
              <div className="projects-section">
                <h2>Projects</h2>
                <ul>
                  <li><a href="#domposer">Thunderstore Mod</a></li>
                  <li><a href="#cookiemunch">Godot Game</a></li>
                  <li><a href="#screentime">Simple Browser Game</a></li>
                </ul>
              </div>
            </header>

            <footer className="App-footer">
              <p>©2024 tylerwill.dev@gmail.com</p>
            </footer>
          </div>
        );
}

export default App;
