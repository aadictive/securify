import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import logo from './logo.svg';
import './style.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" d={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <div className="home-section">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Securify: Password Perfection in One Tap.
        </p>
        <p>If you have reached this place! Stay tuned as I am actively working on this project</p>
      </header>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
