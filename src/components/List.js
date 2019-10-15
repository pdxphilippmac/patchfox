import React from "react";
import styled from "styled-components";
import UpdateNotification from "../icons/UpdateNotification";
import { prototype } from "stack-utils";

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
`;

export default function ListContainer(props) {
  return (
    <ListContainerBorder>
      Game Name{props.name}
      <UpdateNotification />
    </ListContainerBorder>
  );
}
