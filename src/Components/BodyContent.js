import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              I am a systems-focused data analyst with a background in architecting high-volume telemetry pipelines for NASCAR, IndyCar, and Formula 1. 
              I specialize in working behind the scenes to build automated Python pipelines that translate complex, raw data into actionable insights and significantly reduce manual overhead.
            </p>
            <p>
              Driven by a deep passion for cybersecurity, I currently focus on the intersection of data engineering and security operations. From developing analytical datasets for risk mitigation 
              to researching defensive cloud architectures, my goal is to build resilient, automated infrastructure that ensures absolute data integrity.
            </p>
          </div>
          <div className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                  <Link to="/CyberSecurity">Cyber Security Projects</Link>
              </li>
              <li>
                <a 
                  href="https://tyler-will-dev.github.io/NoteApp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Full Stack - Simple Note App
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