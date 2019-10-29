import React from "react";
import LockSymbol from "../icons/lockSymbol";

export default function ModalToggleButton({ setToggleView }) {
  return (
    <>
      <button onClick={setToggleView}>
        <LockSymbol />
      </button>
    </>
  );
}
