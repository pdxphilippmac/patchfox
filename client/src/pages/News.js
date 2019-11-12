import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NewsFetch from "../components/NewsFetch";
import GetGame from "../game/GetGame";
import HomeScreenLettering from "../components/NeonGlow";
import LoadingCircle from "../components/GSAPLoadingCircle";
import PositionLoad from "../components/PositionLoad";

export default function News() {
  const [loading, setLoading] = useState(true);

  const [news, setNews] = useState([]);
  console.log(news, "is news");
  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://api-v3.igdb.com/games/?fields=name,platforms.name,genres.name,cover.url,popularity,rating&order=popularity:desc&expand=genres,cover";
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
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <HomeScreenLettering name1=" Most popular games " />
      <Switch>
        <Route exact path="/News">
          {loading && (
            <PositionLoad>
              <LoadingCircle />
            </PositionLoad>
          )}
          {!loading && <NewsFetch news={news} />}
        </Route>
        <Route exact path="/News/game">
          <GetGame />
        </Route>
      </Switch>
    </>
  );
}
