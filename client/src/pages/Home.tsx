import React, { useState } from "react";

import AlterHomeScreenLogo from "../icons/AlterHomescreenLogo";
import HomeScreenLettering from "../components/HomeScreenLettering";
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
          <AlterHomeScreenLogo />

          <HomeScreenLettering />
        </HeightControlDiv>
      </ImageBackgroundDiv>
    </>
  );
}
