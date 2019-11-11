import React from "react";
import { useHistory } from "react-router-dom";

export default function AddButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/News");
  }

  return (
    <button type="button" onClick={handleClick}>
      Login
    </button>
  );
}
