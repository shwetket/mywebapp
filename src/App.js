import './App.css';
import Headers from './components/Headers';
import Footers from './components/Footers';
import Hero from './components/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skill';
import Connect from './pages/Connect';
import Weather from './pages/projects/Weather';
import { Route, Routes } from 'react-router-dom';
import Counter from './pages/projects/Counter';
import Todo from './pages/projects/Todo'; 

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
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
