import Hero from '../components/Hero';
import Projects from '../pages/Projects';
import Skills from '../pages/Skill';
import Connect from '../pages/Connect';
import Weather from '../pages/projects/Weather';
import Counter from '../pages/projects/Counter';
import Todo from '../pages/projects/Todo';
import NotFound from '../pages/NotFound';

const routes = [
  { path: '/', element: <Hero />, exact: true },
  { path: '/projects', element: <Projects /> },
  { path: '/skills', element: <Skills /> },
  { path: '/contactme', element: <Connect /> },
  { path: '/weather', element: <Weather /> },
  { path: '/counter', element: <Counter /> },
  { path: '/todo', element: <Todo /> },
  { path: '*', element: <NotFound /> },
];

export default routes;