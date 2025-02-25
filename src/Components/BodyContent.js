import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              My name is Tyler Will, I am a Full-Stack developer based out of Austin, Texas. 
              I have professional experience working at General Motors in the Motorsports Organization developing
              web-based applications to run race simulations for NASCAR, Indy, Truck, Xfinity, and Formula 1.
            </p>
            <p>
              I am passionate about solid programming design, coding principles, 
              and a codebase that is maintainable and optimal for both users and developers.
            </p>
          </div>
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                  <Link to="/ThunderstoreMod">Thunderstore Mod</Link>
              </li>
              <li>
                  <Link to="/GodotGame">Godot Game</Link>
              </li>
              <li>
                  <Link to="/PageDemo">Simple Browser Demo</Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default BodyContent;