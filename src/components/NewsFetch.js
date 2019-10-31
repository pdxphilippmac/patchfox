import React from "react";

import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

// import Plus from "../icons/footerPlus";

import { Link } from "@reach/router";

// import Plus from "../icons/footerPlus";

const NewsItem = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #262122e6;
  margin: 25px;
  color: white;

  border-radius: 0px 0px 0px 30px;
  font-family: "futura";
  align-items: center;
  border: #4f5359e6 solid 0.5px;
  color: lightslategray;
`;
const StyLink = styled(Link)`
  text-decoration: none;
`;
const CoverImg = styled.img`
  /* border: lightgray 2px solid; */
  border-radius: 0px 0px 0px 30px;
  padding: 6px;
`;
const MarginP = styled.p`
  margin: 10px;
  padding: 10px;
`;
const FlexDiv = styled.article`
  margin-bottom: 100px;
  overflow: scroll;
`;

// const CoverImage = styled.img`
//   height: 150px;

// `;

export default function NewsFetch({ news }) {
  const history = useHistory();

  function handleNav(value) {
    history.push(`/News/${value}`);
  }
  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  return (
    <FlexDiv>
      {news.map(game => (
        <div key={game.id}>
          <Fade right>
            <NewsItem>
              <StyLink
                onClick={() => handleNav(game.id)}
                to={`/News/${game.id}`}
              >
                <CoverImg
                  src={game.cover.url.replace("t_thumb", "t_cover_small")}
                  alt="cover"
                />
              </StyLink>
              <MarginP>{game.name} </MarginP>
              {/* <p>Rating:{game.popularity}</p>
              <p>
                {game.platforms.map(plat => (
                  <p>{plat.name}</p>
                ))}
              </p>
              <p>{game.genres[0].name} </p> */}
            </NewsItem>
          </Fade>
        </div>
      ))}
    </FlexDiv>
  );
}
