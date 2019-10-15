import React from "react";
import styled from "styled-components";
import { games } from "../api/gamingAPI";
// import { games } from "../api/gamingAPI";

const ListItem = styled.article`
  display: flex;
  justify-content: space-around;

  margin: 10px;

  text-align: center;
  padding: 3px;
`;

export default function Game(props) {
  return (
    <ListItem>
      {props.game.title}
      {/* {props.game.version} */}
    </ListItem>
  );
}
