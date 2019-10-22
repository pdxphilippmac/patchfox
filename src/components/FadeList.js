import React from "react";
import Fade from "react-reveal/Fade";
import { games } from "../api/gamingAPI";
import styled from "styled-components";

// const animateList = { games };

const FadeContainerBorder = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #3b3434e6;
  margin: 20px;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: "futura";
  box-shadow: 0 4px 4px 0px red;
  border: #707070e6 solid 0.5px;
`;

export default function FadeList() {
  return (
    <article>
      {games.map((item, key) => (
        <div key={key}>
          <Fade top>
            <FadeContainerBorder>{`${item.title}`} </FadeContainerBorder>
          </Fade>
        </div>
      ))}
    </article>
  );
}
