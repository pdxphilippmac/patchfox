import { css } from "styled-components";
import { buildUpFooter, buildUpFooterRed } from "./utils/animations";
import img from "./resources/camo.jpg";
import img2 from "./resources/thirdHomescreen.jpg";

const animation = props =>
  css`
    ${buildUpFooter};
  `;
const animationRed = props =>
  css`
    ${buildUpFooterRed};
  `;

export const lightTheme = {
  flexDirection: "row-reverse",
  text: "black",
  boxShadow: " 0 -4px 4px -2px red;",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  animation: ` ${animationRed} 3s ease-out 1 both;,`,
  listItemBackground: "pink",
  /*  backgroundImage: ` url(${img2})`,*/
  body:
    "linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(121,26,19,1) 61%, rgba(0,212,255,1) 100%)",

  borderRadius: " 25px 25px 25px 25px;",
  footer: "lightgrey",
  fill: "red",
  imageWidth: "120px"
};

export const darkTheme = {
  flexDirection: "column",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  backgroundImage: ` url(${img})`,
  animation: ` ${animation} 3s ease-out 1 both;`,
  boxShadow: " 0 -4px 4px -2px #00ceff",
  borderRadius: " 0px 0px 0px 30px;",
  listItemBackground: "#262122e6",
  body: "#1e2222",
  footer: "#110b09",
  fill: "#00ceff",
  imageWidth: "264px, 360px"
};
