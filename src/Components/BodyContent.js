import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
            My name is Tyler Will, a Full-Stack Developer based in Austin, Texas. I have professional experience at General Motors within the Motorsports Organization, 
            where I developed web-based applications to power race simulations for NASCAR, IndyCar, Truck, Xfinity, and Formula 1
            </p>
            <p>
            I’m passionate about building maintainable, well-structured codebases that prioritize both performance and usability. 
            I focus on solid programming principles and scalable design to create seamless experiences for both users and developers.
            </p>
          </div>
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                <a 
                  href="https://JengaJones.github.io/NoteApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Note App
                </a>
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