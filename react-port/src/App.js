import React from 'react';
//import logo from './logo.svg';
import { Route } from "react-router-dom";

import './App.scss';

import { NavBar } from "./Components/NavBar";
import { HomePage } from "./Components/HomePage";

function App() {
  return (
    <div className="App">
     <header className="App-header">
{ /*        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

        <NavBar />

        <Route exact path="/" component={HomePage} />
        <Route
          path="/https://github.com/newbi462"
          component={() => {
            window.location.href = "https://github.com/newbi462";
            return null;
          }}
        />
        <Route
          path="/https://www.linkedin.com/in/russell-h-bb049256/"
          component={() => {
            window.location.href = "https://www.linkedin.com/in/russell-h-bb049256/";
            return null;
          }}
        />

      </header>
    </div>
  );
}

export default App;
