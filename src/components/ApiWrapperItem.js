import React from "react";

export default function ApiWrapperItem(onAdd, name) {
  function handleClick() {
    onAdd(name);
  }

  return <div onClick={handleClick}></div>;
}
