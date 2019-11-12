import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import BrowseGames from "./pages/BrowseGames";
import News from "./pages/News";
import GetGame from "./game/GetGame";
import GetDetails from "./game/GetDetails";
import GlobalStyles from "./GlobalStyles";
import StartScreen from "./pages/StartScreen";
import Toggle from "./components/ToggleThemeButton";
import { useColorMode } from "./hooks/useColorMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

            <Route path="/library" exact component={Library} />
            <Route path="/library/:gameId" component={GetDetails} />
            <Route path="/browsegames" component={BrowseGames} />
            <Route path="/news" exact component={News} />
            <Route path="/news/:gameId" component={GetGame} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}
