import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./compnents/Home/index";
import Update from "./compnents/Home/TodoComponents/Update";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Link to="/:id"></Link>
        <Link to="/"></Link>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Update} exact={true}></Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
