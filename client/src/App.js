import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Add from "./pages/Add";
import Fetch from "./pages/Fetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./pages/News";
import GetGame from "./game/GetGame";
import GetDetails from "./game/GetDetails";
import GlobalStyles from "./GlobalStyles";
import StartScreen from "./pages/StartScreen";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Toggle from "./components/ToggleThemeButton";
import { useColorMode } from "./hooks/useColorMode";

export default function App() {
  const [theme, toggleTheme] = useColorMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />

        <Router>
          <Switch>
            <Route exact path="/" component={StartScreen} />
            <Route exact path="/home" component={Home} />

            <Route path="/add" component={Add} />
            <Route path="/library" exact component={Library} />
            <Route path="/library/:gameId" component={GetDetails} />
            <Route path="/fetch" component={Fetch} />
            <Route path="/news" exact component={News} />
            <Route path="/news/:gameId" component={GetGame} />
            {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}
