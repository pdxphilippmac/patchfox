import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// import Plus from "../icons/footerPlus";
import Loading from "./LoadingIndicator";

// import Plus from "../icons/footerPlus";

const NewsItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #262122e6;
  margin: 25px;
  color: white;

  border-radius: 0px 0px 0px 30px;
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
  padding: 25px;
`;

// const CoverImage = styled.img`
//   height: 150px;

// `;

export default function NewsFetch() {
  const [news, setNews] = useState([]);
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };
  const [loading, setLoading] = React.useState(true);
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
        console.log(response.data);
        setTimeout(setNews(response.data), 500);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          {news.map(game => (
            <div key={game.id}>
              <Fade right>
                <NewsItem>
                  <img src={game.cover.url} alt="cover" />
                  <p>{game.name}</p>
                  {/* <p>Rating:{game.popularity}</p> */}
                  <p>
                    {game.platforms.map(plat => (
                      <p>{plat.name}</p>
                    ))}
                  </p>
                  <p>{game.genres[0].name} </p>
                </NewsItem>
              </Fade>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
