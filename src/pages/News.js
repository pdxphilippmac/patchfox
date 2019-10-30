import React, { useState } from "react";
// import GlobalStyles from "../GlobalStyles";

import { Switch, Route } from "react-router-dom";

import NewsFetch from "../components/NewsFetch";
import GetGame from "../game/GetGame";
import getGamefromApi from "../api/getGameFromApi";
import GlobalStyles from "../GlobalStyles";

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   justify-content: center;
//   overflow: auto;
//   background: black;
// `;

export default function News(id) {
  const [gameID, setGameID] = useState("133");
  // const [data, setGameData] = React.useState("");

  // React.useEffect(() => {
  //   getGamefromApi().then(fetchedgame => {
  //     setGameData(fetchedgame);
  //   });
  //   console.log(`This is data from the outsourced function ${data}`);
  // });

  console.log(`This is game from the top ${id}`);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/News">
          <NewsFetch pushedDownGameID={gameID} handleSetGameID={setGameID} />
        </Route>
        <Route exact path="/News/game">
          <GetGame stringID={gameID} />
        </Route>
      </Switch>
    </>
  );
}
