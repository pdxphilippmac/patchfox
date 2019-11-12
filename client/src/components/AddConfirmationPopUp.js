import React from "react";
import { render } from "react-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Home";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <Home />
  </Provider>
);

render(<App />, document.getElementById("root"));
