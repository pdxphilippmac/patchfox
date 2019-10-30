import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import NeonGlow from "../components/AlterNeonGlow";
import NeonGlowLoading from "../components/NeonGlowLoading";

const TestDiv = styled.div`
  background: lightgrey;
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: black solid 1px;
  border-radius: 0 0px 0px 40px;
  box-shadow: black 0px 6px 6px 6px;
`;

export default function GetGame(params) {
  console.log(`this is ${params}`);
  const [game, setGame] = useState([]);
  // const [params, setParams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api-v3.igdb.com/games/133/?fields=name,involved_companies.company.name,cover.url,summary,game_modes.name,version_title,platforms.name,first_release_date,release_dates.human,websites,total_rating&expand=involved_companies,cover,platforms,platform.versions,version_parent,version_title`;
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
        // setParams(game.id);
        console.log(game);
        setLoading(false);
        console.log(`this is ${params.name}`);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <GlobalStyles />
      <h1>News Sub-Page</h1>
      {loading && (
        <div>
          <NeonGlow />
          <NeonGlowLoading />
        </div>
      )}
      {!loading && (
        <Fade up>
          <TestDiv>
            {game.map(item => (
              <div>
                <img
                  alt="CoverImage "
                  src={item.cover.url.replace("t_thumb", "t_cover_big")}
                />
                <p>Game-ID:{item.id}</p>
                <h1>{item.name}</h1>
                <p>
                  {item.platforms.map(plat => (
                    <p>{plat.name}</p>
                  ))}
                </p>
                <p>Summary: {item.summary}</p>
                <p>
                  Companies: {item.involved_companies[0].company.name},
                  {item.involved_companies[1].company.name}
                </p>
                <p>Release Date:{item.release_dates[0].human}</p>
                {/* <p>
              {game.involved_companies.map(plat => (
                <p>{plat.company.name}</p>
              ))}
            </p> */}

                <p>This is {item.name}</p>
              </div>
            ))}
          </TestDiv>
        </Fade>
      )}
    </>
  );
}
