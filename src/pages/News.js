import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"

import { Switch, Route } from "react-router-dom";

import NewsFetch from "../components/NewsFetch";
import GetGame from "../game/GetGame";

import AlterNeonGlow from "../components/NeonGlow";
import LoadingCircle from "../components/GSAPLoadingCircle";

const PositionLoad = styled.section`
margin-top:200px;
display: flex;
  justify-content: center;
  align-items: center;
`;



export default function News() {
  const [loading, setLoading] = useState(true);


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
        setLoading(false)
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <AlterNeonGlow name1="Most popular games" />
      <Switch>
        <Route exact path="/News">

           {loading &&  <PositionLoad><LoadingCircle /></PositionLoad>}
      {!loading && (          
          <NewsFetch news={news}  />)}
        </Route>
        <Route exact path="/News/game">
          <GetGame info={news} />
        </Route>
      </Switch>
    </>
  );
}
