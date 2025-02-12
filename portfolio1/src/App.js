import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NetworkAnimation from './components/Background/particleEffect.js';

function App() {
 
  return (
    <div className="App">
      <div className="background-container">
        <NetworkAnimation />
      </div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
