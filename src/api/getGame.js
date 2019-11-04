import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

import styled from "styled-components";

import GlobalStyles from "../GlobalStyles";

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
`;

export default function GetGame({ info, match }) {
  const [game, setGame] = useState([]);

  const [loading, setLoading] = useState(true);
  console.log(`Info log ${info}`, match.params.gameId);

  useEffect(() => {
    console.log(`Info log ${info}`);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api-v3.igdb.com/games/${match.params.gameId}/?fields=name,involved_companies.company.name,cover.url,summary,game_modes.name,version_title,platforms.name,first_release_date,release_dates.human,websites,total_rating&expand=involved_companies,cover,platforms,platform.versions,version_parent,version_title`;
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
      <GlobalStyles />

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
                {/* 
                <p>
                  Companies: {item.involved_companies[0].company.name},
                  {item.involved_companies[1].company.name}
                </p> */}
                <p>Release Date: {item.release_dates[0].human}</p>
                {/* <p>
              {game.involved_companies.map(plat => (
                <p>{plat.company.name}</p>
              ))}
            </p> */}
              </FlexDiv>
            ))}
          </TestDiv>
        </Fade>
      )}
    </>
  );
}
