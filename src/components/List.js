import React from "react";
import styled from "styled-components";
import UpdateNotification from "../icons/UpdateNotification";

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
`;

export default function ListContainer() {
  return (
    <ListContainerBorder>
      Game Name
      <UpdateNotification />
    </ListContainerBorder>
  );
}
