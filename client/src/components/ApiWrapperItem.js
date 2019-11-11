import React from "react";

export default function ApiWrapperItem(onAdd, name, props) {
  function handleClick() {
    onAdd(name);
  }

  return <div onClick={handleClick}>{props}</div>;
}
