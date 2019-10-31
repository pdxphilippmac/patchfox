import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Add from "./pages/Add";
import Fetch from "./pages/Fetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./pages/News";
import GetGame from "./game/GetGame";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/Add" component={Add} />
          <Route path="/Library" component={Library} />
          <Route path="/Fetch" component={Fetch} />
          <Route path="/News" exact component={News} />
          <Route path="/News/:gameId" component={GetGame} />
          {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
