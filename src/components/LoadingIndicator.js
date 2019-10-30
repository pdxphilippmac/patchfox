import React from "react";
import styled from "styled-components";

import BlinkingEdge from "./BlinkingEdgeAnimation";

const LoadingIndicator = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  background: black;
  height: 100vh;
  margin: 80px;
`;

export default function Loading() {
  return (
    <LoadingIndicator>
      <BlinkingEdge />
    </LoadingIndicator>
  );
}
