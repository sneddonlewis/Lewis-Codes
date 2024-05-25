import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import { Scrollspy } from './components/Scrollspy';

function App() {
  return (
    <>
      <div className='background'>
        <Scrollspy />
        <About />
        <Skills />
        <Certifications />
        <Projects />
      </div>
    </>
  );
}


export default App;
