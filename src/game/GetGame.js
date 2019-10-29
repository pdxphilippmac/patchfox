import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/LoadingIndicator";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const TestDiv = styled.div`
  background: red;
`;

export default function GetGame(params) {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://api-v3.igdb.com/games/${params.id}/?fields=name,involved_companies.company.name,cover.url,summary,game_modes.name,version_title,platforms.name,first_release_date,release_dates.human,websites,total_rating&expand=involved_companies,cover,platforms,platform.versions,version_parent,version_title`;
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
      <h1>News Page</h1>
      <div>
        {game.map(item => (
          <div>
            <img alt="CoverImage " src={item.cover.url} />
            <p>{item.id}</p>
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
      </div>
    </>
  );
}
