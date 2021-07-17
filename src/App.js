import React, {} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

// import './bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./layout/header/navbar";
import Certifications from "./components/certifications/Certifications";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
        <NavBar />
        <About />
        <BrowserRouter>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/certifications">
                <Certifications />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
