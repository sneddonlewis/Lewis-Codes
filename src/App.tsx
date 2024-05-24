import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/certifications">
          <Certifications />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/">
        <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
