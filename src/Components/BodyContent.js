import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              I’m Tyler Will, a systems-focused engineer with a background in internal tools and simulation platforms, previously supporting NASCAR, IndyCar, and Formula 1 race teams at 
              General Motors. I built tools for a Race Vehicle Simulation application that provided support to race engineers.
            </p>
            <p>
              Now I’m transitioning into cybersecurity and data infrastructure, with a focus on secure systems, reliable architecture, and real-world impact. 
              I’m especially interested in roles that blend automation, observability, and security; Ideally in industries like aerospace, healthcare, or defense where precision and trust matter. 
              I’m hands-on, always learning, and driven by solving problems that keep systems strong and people supported.
            </p>
          </div>
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                  <Link to="/CyberSecurity">Cyber Security</Link>
              </li>
              <li>
                <a 
                  href="https://tyler-will-dev.github.io/NoteApp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Note App
                </a>
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