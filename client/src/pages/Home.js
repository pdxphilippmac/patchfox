import React, { useState } from "react";

import AlterHomescreenLogo from "../icons/alterhomescreenlogo";
import AlterNeonGlow from "../components/AlterNeonGlow";
import LoginModal from "../components/LoginModal";
import LockSymbol from "../icons/lockSymbol";
import HeightControlDiv from "../components/HeightControlDiv";
import ImageBackgroundDiv from "../components/ImageBackgroundDiv";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ImageBackgroundDiv>
        <button onClick={() => setShowLogin(!showLogin)}>
          <LockSymbol />
        </button>

        {showLogin && <LoginModal show={showLogin} />}

        <HeightControlDiv>
          <AlterHomescreenLogo />

          <AlterNeonGlow />
        </HeightControlDiv>
      </ImageBackgroundDiv>
    </>
  );
}
