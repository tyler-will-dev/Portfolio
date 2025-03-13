import './BodyHeader.css'

function BodyHeader() {
    return (
        <header className="App-header">
        <div className="header-icons">
          <a
            href={process.env.PUBLIC_URL + "/TylerResume.pdf"} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/tyler-will-57029916a/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/JengaJones">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>
    )
}

export default BodyHeader;