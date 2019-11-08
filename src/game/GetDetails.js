import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

import styled from "styled-components";

import NeonGlowLoading from "../components/NeonGlowLoading";

const TestDiv = styled.article`
  background: #262122e6;
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: black solid 1px;
  border-radius: 0 0px 0px 40px;
  box-shadow: black 0px 6px 6px 6px;
  color: lightslategray;
  margin-bottom: 100px;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const CoverImg = styled.img`
  /* border: lightgray 2px solid; */
  border-radius: 0 0px 0px 40px;
  box-shadow: #00ceff 0px 6px 6px 1px;
  max-width: 300px;
  margin: 35px;
`;

export default function GetDetails({ info, match }) {
  const [game, setGame] = useState([]);

  const [loading, setLoading] = useState(true);
  console.log(`Info log ${info}`, match.params.gameId);

  useEffect(() => {
    console.log(`Info log ${info}`);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api-v3.igdb.com/games/${match.params.gameId}/?fields=name,version_title,rating,involved_companies.company.name,total_rating_count,storyline,game_engines.name,cover.url,summary,game_modes.name,version_title,platforms.name,first_release_date,release_dates.human,websites,total_rating&expand=involved_companies,cover,platforms,platform.versions,game_engines,version_parent,version_title,total_rating_count`;
    axios({
      url: proxyUrl + targetUrl,
      method: "GET",
      headers: {
        Accept: "application/json",
        "user-key": "e2715f17601c1d968b592f747c6aa839",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        console.log(response.data);

        setGame(response.data);
        console.log(game);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {loading && (
        <div>
          <NeonGlowLoading />
        </div>
      )}
      {!loading && (
        <Fade up>
          <TestDiv>
            {game.map(item => (
              <FlexDiv>
                <CoverImg
                  alt="ಥ_ಥ"
                  src={
                    item.cover
                      ? item.cover.url.replace("t_thumb", "t_cover_big")
                      : "lolol  "
                  }
                />

                <h1>{item.name}</h1>
                <span>
                  {item.total_rating
                    ? item.total_rating.toFixed(1)
                    : " not yet rated"}{" "}
                  ⭐️ from{" "}
                  {item.total_rating_count ? item.total_rating_count : "-"}{" "}
                  votes
                </span>

                <p>
                  Release Date:
                  {item.release_dates
                    ? item.release_dates[0].human
                    : "01.01.2020"}
                </p>
                {/* <p>Game-ID:{item.id}</p> */}

                {item.summary ? (
                  <p>
                    {" "}
                    <h2>Summary:</h2>
                    {item.summary}{" "}
                  </p>
                ) : null}
                {item.storyline ? (
                  <p>
                    {" "}
                    <h2>Storyline:</h2>
                    {item.storyline}{" "}
                  </p>
                ) : null}

                <p>
                  <h3>Companies:</h3>
                  {item.involved_companies
                    ? item.involved_companies.map(plat => (
                        <p>{plat.company.name}</p>
                      ))
                    : " No Companies tracked"}
                </p>
                <p>
                  <h3>Game Modes:</h3>
                  {item.game_modes
                    ? item.game_modes.map(plat => <p>{plat.name}</p>)
                    : " No modes tracked"}
                </p>
                <p>
                  <h3>Game Engines:</h3>
                  {item.game_engines
                    ? item.game_engines.map(plat => <p>{plat.name}</p>)
                    : " No game engines tracked"}
                </p>

                <p>
                  <h3>Platforms:</h3>
                  {item.platforms
                    ? item.platforms.map(plat => <p>{plat.name}</p>)
                    : "PlayStation 4, Xbox One, Pc, Nintendo Switch"}
                </p>
                <p>Game Version 3.2.5</p>
              </FlexDiv>
            ))}
          </TestDiv>
        </Fade>
      )}
    </>
  );
}
