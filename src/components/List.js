import React from "react";
import styled from "styled-components";
// import { games } from "../api/gamingAPI";

const ListItem = styled.article`
  display: flex;
  background: red;
  margin: 2px;
  border: 2px yellow solid;
  text-align: center;
  padding: 2px;
`;

export default function Game(props) {
  return <ListItem>{props.game.title}</ListItem>;
}
