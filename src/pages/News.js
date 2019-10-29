import React from "react";
// import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

import NewsFetch from "../components/NewsFetch";
import GetGame from "../game/GetGame";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   justify-content: center;
//   overflow: auto;
//   background: black;
// `;

export default function News(game) {
  return (
    <>
      <NewsFetch />
      <GetGame params={game} />
    </>
  );
}
