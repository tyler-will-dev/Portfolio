import './BodyContent.css'
import { Link } from 'react-router-dom';

function BodyContent() {

    return (
        <div className="content-row">
          <div className="welcome-section">
            <h1>Hello!</h1>
            <p>
              I’m Tyler, I am a systems-focused engineer with a background in building mission-critical simulation platforms and secure internal tools. 
              My experience includes architecting high-volume telemetry pipelines and production-ready data layers that supported high-performance teams in NASCAR, IndyCar, and Formula 1. 
              I specialize in translating complex telemetry into actionable insights, having historically reduced manual testing overhead by 60% through custom automation and Python-based validation scripts
            </p>
            <p>
              Currently, I focus on the intersection of data engineering and security operations, developing analytical datasets for strategic risk mitigation and automating complex feature engineering. 
              In my free time, I stay hands-on by dabbling in cybersecurity research and exploring defensive cloud architectures to sharpen my technical edge. 
              I am driven by the challenge of creating resilient, automated infrastructure that ensures absolute data integrity across distributed environments.
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