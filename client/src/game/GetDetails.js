import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import FlexDiv from "../components/FlexDiv";
import TestDiv from "../components/TestDiv";
import CoverImg from "../components/CoverImg";
import NeonGlowLoading from "../components/NeonGlowLoading";

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
                  <h3>Release Date:</h3>
                  {item.release_dates ? item.release_dates[0].human : "tba"}
                </p>

                <h2>Summary:</h2>
                {item.summary ? <article>{item.summary} </article> : null}

                {item.storyline ? (
                  <p>
                    <h3>Storyline:</h3>
                    {item.storyline}
                  </p>
                ) : null}

                <h3>Companies:</h3>

                {item.involved_companies
                  ? item.involved_companies.map(plat => (
                      <p>{plat.company.name}</p>
                    ))
                  : " No Companies tracked"}

                <h3>Game Modes:</h3>
                {item.game_modes
                  ? item.game_modes.map(plat => <p>{plat.name}</p>)
                  : " No modes tracked"}

                <h3>Game Engines:</h3>
                {item.game_engines
                  ? item.game_engines.map(plat => <p>{plat.name}</p>)
                  : " No game engines tracked"}

                <h3>Platforms:</h3>
                {item.platforms
                  ? item.platforms.map(plat => <p>{plat.name}</p>)
                  : "PlayStation 4, Xbox One, Pc, Nintendo Switch"}

                <p>Game Version 3.2.5</p>
              </FlexDiv>
            ))}
          </TestDiv>
        </Fade>
      )}
    </>
  );
}
