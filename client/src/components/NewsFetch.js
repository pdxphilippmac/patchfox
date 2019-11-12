import React from "react";

import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

// import Plus from "../icons/footerPlus";

import { Link } from "@reach/router";
import NewsItem from "../components/NewsItem";
// import Plus from "../icons/footerPlus";

const StyLink = styled(Link)`
  text-decoration: none;
`;
const CoverImg = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6px;

  &:hover {
    transform: scale(1.5);
  }
`;
const MarginP = styled.h1`
  margin: 10px;
  padding: 10px;
`;
const FlexDiv = styled.article`
  margin-bottom: 100px;
  overflow: scroll;
`;

export default function NewsFetch({ news }) {
  const history = useHistory();

  function handleNav(value) {
    history.push(`/news/${value}`);
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
              <CoverImg
                src={
                  game.cover.url
                    ? game.cover.url.replace("t_thumb", "t_cover_small")
                    : "game.cover"
                }
                alt="cover"
              />
              <span>
                <h3>{game.popularity.toFixed(2)} ⭐️</h3>
              </span>

              <MarginP>{game.name} </MarginP>
              <StyLink
                onClick={() => handleNav(game.id)}
                to={`/news/${game.id}`}
              >
                More info
              </StyLink>

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
