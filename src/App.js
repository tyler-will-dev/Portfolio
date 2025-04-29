import './App.css';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageDemo from './Pages/PageDemo';
import CyberSecurity from './Pages/CyberSecurity';
import ThunderstoreMod from './Pages/ThunderstoreMod';

function App() {
  const location = useLocation();
  const isPageDemo = location.pathname === '/PageDemo';
  const isCyberSecurity = location.pathname === '/CyberSecurity';
  const isThunderstoreMode = location.pathname === '/ThunderstoreMod';

  return (
    <div className="App-wrapper">
      {!isPageDemo && !isCyberSecurity && !isThunderstoreMode && (
        <div className="full-screen-wrapper">
          <div className="page-container">
            <div className="corner-top-left"></div>
            <div className="corner-bottom-right"></div>
            <BodyHeader />
            <Routes>
              <Route path="/" element={<BodyContent />} />
            </Routes>
          </div>
        </div>
      )}

      {isThunderstoreMode && (
        <Routes>
          <Route path="/ThunderstoreMod" element={<ThunderstoreMod />} />
        </Routes>
      )}

      {isCyberSecurity && (
        <Routes>
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
        </Routes>
      )}

      {isPageDemo && (
        <Routes>
          <Route path="/PageDemo" element={<PageDemo />} />
        </Routes>
      )}

      <footer className="App-footer">
        <p>©2024 tylerwill.dev@gmail.com</p>
      </footer>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;