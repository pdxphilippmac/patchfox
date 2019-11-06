import React, { useEffect } from "react";
import styled from "styled-components";
import img from "../resources/camo.jpg";

import { Redirect } from "react-router-dom";

import AlterNeonGlow from "../components/NeonGlow";

const Margin = styled.div`
  display: flex;

  justify-content: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
`;

const BodyStartpage = styled.div`
  height: 100vh;
  background-image: url(${img});
`;

export default function StartScreen() {
  const [toMain, setToMain] = React.useState(false);

  useEffect(() => {
    const handle = setTimeout(() => setToMain(true), 3200);

    return () => {
      clearTimeout(handle);
    };
  }, []);

  return (
    <>
      {toMain ? (
        <Redirect to="/home" />
      ) : (
        <BodyStartpage>
          <Margin>
            <AlterNeonGlow
              name1="Welcome to the "
              name2="revolutionary Gaming News Feed..."
            />
          </Margin>
        </BodyStartpage>
      )}
    </>
  );
}
