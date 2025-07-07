import './App.css';
import Navbar from './Navbar';
import Home from './Home'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Skill from './Skill';
import Certificate from './Certificate';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
