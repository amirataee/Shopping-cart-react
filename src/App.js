import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Section from "./component/Section";
import {DataProvider} from './component/Context'

 class App extends Component {
  render() {
    return (
    
      <DataProvider>
      <div className="app">
        <Router>
            <Header />
            <Section />
        </Router>
      </div>
      </DataProvider>
     
    );
  }
}

export default App;
