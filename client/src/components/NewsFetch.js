import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import { Link } from "@reach/router";
import NewsItem from "../components/NewsItem";
import OverflowMarginBottom from "./OverflowMarginBottom";
import NewsCoverImage from "./NewsCoverImage";

const StyLink = styled(Link)`
  text-decoration: none;
`;

const MarginP = styled.h1`
  margin: 10px;
  padding: 10px;
`;

export default function NewsFetch({ news }) {
  const history = useHistory();
  function handleNav(value) {
    history.push(`/news/${value}`);
  }
  return (
    <OverflowMarginBottom>
      {news.map(game => (
        <div key={game.id}>
          <Fade right>
            <NewsItem>
              <NewsCoverImage
                src={
                  game.cover.url
                    ? game.cover.url.replace("t_thumb", "t_cover_small")
                    : "game.cover"
                }
                alt="cover"
              />
              <span role="img" aria-labelledby="RatingStar">
                <h3>{game.popularity.toFixed(0)} ⭐️</h3>
              </span>

              <MarginP>{game.name} </MarginP>
              <StyLink
                onClick={() => handleNav(game.id)}
                to={`/news/${game.id}`}
              >
                More info
              </StyLink>
            </NewsItem>
          </Fade>
        </div>
      ))}
    </OverflowMarginBottom>
  );
}
