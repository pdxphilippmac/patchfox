import React from "react";
import { Switch, Route } from "react-router-dom";
import GetDetails from "../game/GetDetails";
import AlterNeonGlow from "../components/NeonGlow";
import LibraryFetch from "../components/LibraryFetch";

export default function Library() {
  return (
    <>
      <AlterNeonGlow name1="Library" />
      <Switch>
        <Route exact path="/library">
          <LibraryFetch />
        </Route>
        <Route exact path="/library/game">
          <GetDetails />
        </Route>
      </Switch>
    </>
  );
}
