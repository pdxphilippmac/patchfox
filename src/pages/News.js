import React, { useState, useEffect } from "react";
import axios from "axios";
// import GlobalStyles from "../GlobalStyles";

import { Switch, Route } from "react-router-dom";

import NewsFetch from "../components/NewsFetch";
import GetGame from "../game/GetGame";
import getGamefromApi from "../api/getGameFromApi";
import GlobalStyles from "../GlobalStyles";

import AlterNeonGlow from "../components/NeonGlow";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   justify-content: center;
//   overflow: auto;
//   background: black;
// `;

export default function News() {
  // const [data, setGameData] = React.useState("");

  // React.useEffect(() => {
  //   getGamefromApi().then(fetchedgame => {
  //     setGameData(fetchedgame);
  //   });
  //   console.log(`This is data from the outsourced function ${data}`);
  // });

  const [news, setNews] = useState([]);
  console.log(news, "is news");
  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://api-v3.igdb.com/games/?fields=name,platforms.name,genres.name,cover.url,popularity&order=popularity:desc&expand=genres,cover";
    axios({
      url: proxyUrl + targetUrl,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": "e2715f17601c1d968b592f747c6aa839"
      }
    })
      .then(response => {
        setNews(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <AlterNeonGlow name1="Most popular games" />
      <Switch>
        <Route exact path="/News">
          <NewsFetch news={news} />
        </Route>
        <Route exact path="/News/game">
          <GetGame info={news} />
        </Route>
      </Switch>
    </>
  );
}
