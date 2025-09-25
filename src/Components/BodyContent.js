import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              I’m Tyler Will, a systems-focused engineer with a background in building secure internal tools and simulation platforms, including applications that supported NASCAR, 
              IndyCar, and Formula 1 race teams at General Motors. My work delivered mission-critical insights to engineers in high-performance environments where precision and 
              reliability mattered most
            </p>
            <p>
              Today, I apply that same focus to cybersecurity and data infrastructure, with expertise in secure systems, IAM controls, SIEM monitoring, and cloud security. 
              I’m passionate about roles that combine automation, observability, and defense. I am hands-on, driven, and I thrive on solving complex problems that keep systems 
              strong and people supported
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