import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from "./components/Main";
import Menu from "./components/Menu";
import Concert from "./components/Concert";
import Theatre from "./components/Theatre";
import About from "./components/About";
import Event from "./components/Event";
import "./style/styles.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Menu/>
          <Route exact path="/" component={Main}/>
          <Route path="/concert" component={Concert}/>
          <Route path="/theatre" component={Theatre}/>
          <Route path="/about" component={About}/>
          <Route path="/event/:id" component={Event}/>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
