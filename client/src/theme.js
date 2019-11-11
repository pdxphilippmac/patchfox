import { css } from "styled-components";
import { buildUpFooter, buildUpFooterRed } from "./utils/animations";
import img from "./resources/camo.jpg";

const animation = props =>
  css`
    ${buildUpFooter};
  `;
const animationRed = props =>
  css`
    ${buildUpFooterRed};
  `;

export const lightTheme = {
  flexDirection: "column",

  text: "black",
  boxShadow: " 0 -4px 4px -2px red;",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  animation: ` ${animationRed} 3s ease-out 1 both;,`,
  listItemBackground: "pink",
  body: "gray",
  footer: "lightgrey",
  fill: "red"
};

export const darkTheme = {
  flexDirection: "column",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  background: ` url(${img})`,
  animation: ` ${animation} 3s ease-out 1 both;`,
  boxShadow: " 0 -4px 4px -2px #00ceff;",

  listItemBackground: "#262122e6",
  body: "#1e2222",
  footer: "#110b09",
  fill: "#00ceff"
};
