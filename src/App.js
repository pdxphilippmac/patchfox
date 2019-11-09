import React, {useState} from "react";
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
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

export default function App() {

  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }


  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
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
