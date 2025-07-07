import './App.css';
import Navbar from './Navbar';
import Home from './Home'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Create from './Create';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
