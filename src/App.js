import './App.css';
import BodyHeader from './Components/BodyHeader';
import BodyContent from './Components/BodyContent';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageDemo from './Pages/PageDemo';

function App() {
  const currentLocation = useLocation();

  const getCurrentLocation = () => {
    return currentLocation.pathname === './PageDemo' ? 'PageDemo' : 'App';
  }

  return (
            <div className={getCurrentLocation()}>
              <div className="full-screen-wrapper">
                <div className="page-container">
                  {currentLocation.pathname !== '/PageDemo' && (
                    <>
                      <div className="corner-top-left"></div>
                      <div className="corner-bottom-right"></div>
                      <BodyHeader />
                    </>
                  )}
                  <Routes>
                    <Route path="/" element={<BodyContent />} />
                    <Route path="/PageDemo" element={<PageDemo />} />
                  </Routes>
                </div>
              </div>

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
  )
}

export default AppWithRouter;
