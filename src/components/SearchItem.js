import React from "react";
import styled from "styled-components";

const SearchItem = styled.article`
  display: flex;
  justify-content: space-around;

  margin: 10px;

  text-align: center;
  padding: 3px;
`;

export default function SearchGame(props) {
  return (
    <SearchItem>
      {props.game.title}

      {/* {props.game.version} */}
    </SearchItem>
  );
}
