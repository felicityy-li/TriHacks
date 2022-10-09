import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors_page" element={<DoctorsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
