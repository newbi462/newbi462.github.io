import React, { useState } from 'react';
//import logo from './logo.svg';

//Tools and Hooks
import { Route } from "react-router-dom";

//Style
import './App.scss';

//Components
import { NavBar } from "./Components/NavBar";
import { HomePage } from "./Components/HomePage";
import { ReactDemos } from "./Components/ReactDemos";
import { HTMLDemos } from "./Components/HTMLDemos";
import { AboutCSSs } from "./Components/AboutCSSs";
import { AboutJSandNODE } from "./Components/AboutJSandNODE";

//Coontext/STATE
import { ContextBox } from "./Context/ContextBox";

function App() {
  const [selectedState, setSelectedState] = useState("test42a");

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

        <ContextBox.Provider value={{ selectedState, setSelectedState }}>
          <NavBar />

          <Route exact path="/" component={HomePage} />
          <Route path="/ReactDemos" component={ReactDemos} />
          <Route path="/HTMLDemos" component={HTMLDemos} />
          <Route path="/AboutCSSs" component={AboutCSSs} />
          <Route path="/AboutJSandNODE" component={AboutJSandNODE} />

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
        </ContextBox.Provider>

      </header>
    </div>
  );
}

export default App;
