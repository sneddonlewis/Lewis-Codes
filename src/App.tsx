import React, {} from 'react';

import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./layout/header/navbar";
import Body from "./layout/body/Body";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Body />
    </div>
  );
}

export default App;
