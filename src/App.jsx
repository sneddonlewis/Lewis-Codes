import React, {} from 'react';

import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./layout/header/navbar";
import Body from "./layout/body/Body";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Body/>
        <Footer />
    </div>
  );
}

export default App;
