import React from "react";
import Footer from "../components/Footer";
import PlusActive from "../icons/footerPlusActive";
import List from "../icons/footerList";
import HomeActive from "../icons/footerHomeActive";
import styled from "styled-components";

export default {
  title: "FooterBarFinal"
};

const StyledHomeButton = styled.div`
  /* position: fixed; */
  border: none;
  z-index: 1;

  background: #1d1f2e;
  box-shadow: 0 -8px 8px 0px #00ceff;
  border-radius: 50%;

  left: 40%;
  bottom: -10;
  :hover {
    box-shadow: 0 -8px 8px 0px #00ebff;
  }
  /* right: 0; */
`;

// export const FooterBarActive = () => <Footer />;

export const FooterBarHomeActive = () => (
  <Footer>
    <StyledHomeButton>
      <HomeActive />
    </StyledHomeButton>
  </Footer>
);
export const FooterBarPlusActive = children => (
  <Footer>
    <StyledHomeButton>{children}</StyledHomeButton>
  </Footer>
);

// export const FooterBarLISTActive = () => (
//   <Footer>
//     <List />
//   </Footer>
// );
