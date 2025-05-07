import './App.css';
import Headers from './components/Headers';
import Footers from './components/Footers';
import { Route, Routes } from 'react-router-dom';
import routes from './utils/routes';

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact || false}
          />
        ))}
      </Routes>
      <Footers />
    </div>
  );
}

export default App;