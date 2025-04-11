import './App.css';
import Headers from './Modules/Headers';
import Footers from './Modules/Footers';
import Hero from './Modules/Hero';
import Projects from './Modules/Projects';  
import About from './Modules/About';  
import Skills from './Modules/Skill';  
import Connect from './Modules/Connect';  
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Routes>
              <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contactme" element={<Connect />} />
               
            </Routes>
      <Footers/>
            
    </div>
  );
}

export default App;
