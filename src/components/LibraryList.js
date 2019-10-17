import React from "react";
import styled from "styled-components";
import UpdateNotification from "../icons/UpdateNotification";
// import { prototype } from "stack-utils";
import { games } from "../api/gamingAPI";
import Game from "./ListItem";
import { flicker } from "../utils/animations";

const ListContainerBorder = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #3b3434e6;
  margin: 5px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "futura";
  box-shadow: 0 4px 4px 0px #00ceff;
  border: #707070e6 solid 0.5px;
  animation: ${flicker} 2s ease-in 1 both;
`;

export default function LibraryContainer(children) {
  return (
    <>
      {games.map((game, index) => {
        return (
          <ListContainerBorder game={game}>
            <Game key={game.title} game={game} />
          </ListContainerBorder>
        );
      })}

      <UpdateNotification />
    </>
  );
}
