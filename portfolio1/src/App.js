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
      <div class="footer-social-icons">
        <ul class="social-icons">
            <li><a href="https://x.com/tom_bchrd_" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tom-bouchard-881b212b2/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/dobronx06" class="social-icon"> <i class="fa fa-github"></i></a></li>
        </ul>
    </div>
    </div>
    
  );
}

export default App;
