import { buildUpFooter } from "./utils/animations";
import img from "./resources/camo.jpg";

export const lightTheme = {
  body: "lightgrey",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  footer: "#110b09"
};

export const darkTheme = {
  body: "#1e2222",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  footer: "#110b09",
  background: ` url(${img})`
};
