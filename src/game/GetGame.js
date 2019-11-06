import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

import addToJsonDb from "../api/addToJsonDb";
import styled from "styled-components";

import NeonGlowLoading from "../components/NeonGlowLoading";

import PlusIcon from "../icons/footerPlus";
const StyledPlusIcon = styled.div`
  border: 5px solid #00ceff;
  border-radius: 50%;
`;
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
function handleClick(name, id, cover) {
  addToJsonDb(name, id, cover);
  console.log(name);
}

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
      {loading && (
        <div>
          {/* <NeonGlow /> */}
          <NeonGlowLoading />
        </div>
      )}
      {!loading && (
        <Fade up>
          <TestDiv>
            {game.map(item => (
              <FlexDiv>
                <button
                  name={item.name}
                  id={item.id}
                  onClick={() => handleClick(item.name, item.id, item.cover)}
                >
                  <StyledPlusIcon>
                    <PlusIcon />
                  </StyledPlusIcon>
                </button>
                <CoverImg
                  alt="CoverImage "
                  src={item.cover.url.replace("t_thumb", "t_cover_big")}
                />

                <p>Release Date: {item.release_dates[0].human}</p>
                <p>Game-ID:{item.id}</p>

                <h1>{item.name}</h1>
                <p>
                  {item.platforms.map(plat => (
                    <p>{plat.name}</p>
                  ))}
                </p>
                <p>{item.summary}</p>
                <p>Game Version 3.2.5</p>

                {/* <p>
                  Companies: {item.involved_companies[0].company.name},
                  {item.involved_companies[1].company.name}
                </p> */}
              </FlexDiv>
            ))}
          </TestDiv>
        </Fade>
      )}
    </>
  );
}
