import './App.css';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageDemo from './Pages/PageDemo';
import GodotGame from './Pages/GodotGame';
import ThunderstoreMod from './Pages/ThunderstoreMod';

function App() {
  const location = useLocation();
  const isPageDemo = location.pathname === '/PageDemo';
  const isGodotGame = location.pathname === '/GodotGame';
  const isThunderstoreMode = location.pathname === '/ThunderstoreMod';

  return (
    <div className="App-wrapper">
      {!isPageDemo && !isGodotGame && !isThunderstoreMode && (
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

      {isGodotGame && (
        <Routes>
          <Route path="/GodotGame" element={<GodotGame />} />
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