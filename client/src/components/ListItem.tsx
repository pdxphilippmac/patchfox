import React from "react";
import styled from "styled-components";

const ListItem = styled.article`
  display: flex;
  justify-content: space-around;

  margin: 10px;
  background-color: ${({ theme }) => theme.listItemBackground};
  text-align: center;
  padding: 3px;
`;

export default function Game(props) {
  return <ListItem>{props.game.title}</ListItem>;
}
