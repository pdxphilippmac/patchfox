import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Add from "./pages/Add";
import Fetch from "./pages/Fetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

export default function App() {
  return (
    <Router>
      <Footer />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Add" component={Add} />
        <Route path="/Library" component={Library} />
        <Route
          path="/Fetch"
          component={Fetch}
          activeClassName="navbar__link--active"
        />
        {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}
