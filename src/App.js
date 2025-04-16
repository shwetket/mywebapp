import './App.css';
import Headers from './Modules/Headers';
import Footers from './Modules/Footers';
import Hero from './Modules/Hero';
import Projects from './Modules/Projects';
import About from './Modules/About';
import Skills from './Modules/Skill';
import Connect from './Modules/Connect';
import Weather from './Modules/SubModules/Weather';
import { Route, Routes } from 'react-router-dom';
import Counter from './Modules/SubModules/Counter';
import Todo from './Modules/SubModules/Todo'; 

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactme" element={<Connect />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
      <Footers />

    </div>
  );
}

export default App;
