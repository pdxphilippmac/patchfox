import React, { useEffect } from "react";
import styled from "styled-components";
import img from "../resources/camo.jpg";
import { turner } from "../utils/animations";

import { Redirect } from "react-router-dom";

import AlterNeonGlow from "../components/NeonGlow";

const StyledAdd = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #00ceff,
    0 0 40px #00ceff, 0 0 55px #00ceff, 0 0 75px #00ceff;
  animation: ${turner} 3.2s infinite cubic-bezier(0.165, 0.84, 0.44, 1);
  margin: 120px;
`;
const Margin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
`;

const BodyStartpage = styled.div`
  height: 100vh;
  background-image: url(${img});
`;

export default function StartScreen() {
  const [toMain, setToMain] = React.useState(false);

  useEffect(() => {
    const handle = setTimeout(() => setToMain(true), 8200);

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
            <AlterNeonGlow name2="Powered by Team Burrito App" />
            <div>
              <StyledAdd
                src="http://getdrawings.com/free-icon/burrito-icon-58.png"
                alt="Burrito Logo"
              />
            </div>
          </Margin>
        </BodyStartpage>
      )}
    </>
  );
}
