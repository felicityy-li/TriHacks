import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors_page" element={<DoctorsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
