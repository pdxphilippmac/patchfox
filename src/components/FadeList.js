import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
// import { games } from "../api/gamingAPI";
import styled from "styled-components";
import { buildList } from "../utils/animations";

// const animateList = { games };

const FadeContainerBorder = styled.div`
  display: flex;

  flex-grow: 1;
  flex-direction: column;
  background-color: #3b3434e6;
  margin: 25px;
  color: white;
  padding: 10px;
  border-radius: 0 4px 4px 0;
  font-family: "futura";
  align-items: center;

  /* border: #707070e6 solid 0.5px; */
  animation: ${buildList} 3s ease-out 1 both;
`;

export default function FadeList(filteredGames) {
  const [library, setLibrary] = useState([]);

  // const options = {
  //   header: { "user-key": "e2715f17601c1d968b592f747c6aa839" }
  // };

  useEffect(() => {
    const targetUrl = "http://localhost:3000/posts";
    axios({
      url: targetUrl,
      method: "GET"
    })
      .then(response => {
        console.log(response.data);

        setLibrary(response.data);
        console.log(library);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <article>
      {filteredGames.map((lib, key) => (
        <div key={key}>
          <Fade left>
            <FadeContainerBorder>
              <p>{`${lib.title}`} </p>
              <p>{`${lib.changes}`}</p>
            </FadeContainerBorder>
          </Fade>
        </div>
      ))}
    </article>
  );
}
