import './App.css';

function App() {

  return (
          <div className="App">
            <div className="full-screen-wrapper">
              <div className="page-container">
              <div className="corner-top-left"></div>
              <div className="corner-bottom-right"></div>

                <header className="App-header">
                  <div className="header-icons">
                    <a href="https://www.linkedin.com/in/tyler-will-57029916a/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/JengaJones">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/...">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </header>

                <div className="content-row">
                  <div className="welcome-section">
                    <h1>Hello!</h1>
                    <p>
                      My name is Tyler Will, I am a Full-Stack developer based out of Austin, Texas. 
                      I have professional experience working at General Motors in the Motorsports Organization developing
                      web-based applications to run race simulations for NASCAR, Indy, Truck, Xfinity, and Formula 1.
                    </p>
                    <p>
                      I'm passionate about solid programming design, coding principles, 
                      and a codebase that is maintainable and optimal for both users and developers
                    </p>
                  </div>
                  <div className="projects-section">
                    <h2>Projects</h2>
                    <ul>
                      <li><a href="Link">Thunderstore Mod</a></li>
                      <li><a href="Link">Godot Game</a></li>
                      <li><a href="Link">Simple Browser Game</a></li>
                    </ul>
                  </div>
                  </div>
              </div>
            </div>

            <footer className="App-footer">
              <p>©2024 tylerwill.dev@gmail.com</p>
            </footer>
          </div>
        );
}

export default App;
