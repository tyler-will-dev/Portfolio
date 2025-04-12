import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              I’m Tyler Will, a developer based in Austin, Texas with experience building internal tools at General Motors to support NASCAR, IndyCar, and Formula 1 race teams. 
              These tools helped race teams make faster, smarter decisions through accessible data and real-time performance insights.
            </p>
            <p>
              I'm now focused on data engineering — designing scalable systems, writing clean code, and solving real problems with real data. I’m especially drawn to roles in 
              aerospace and healthcare where technical skill and reliability make a real impact, and where I can keep learning while staying hands-on.
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