import img from "./resources/final.jpg";

export const lightTheme = {
  flexDirection: "row",
  text: "black",
  listItemBackground: "lightgrey",
  body:
    "linear-gradient(360deg,rgba(0,212,255,1)  0%, rgba(121,26,19,1) 61%, rgba(2,0,36,1) 100%)",
  borderRadius: " 25px 25px 25px 25px;",
  footer: "lightgrey",
  fill: "rgba(190,26,19,1)",
  imageWidth: "120px",
  modal: "lightgrey"
};

export const darkTheme = {
  flexDirection: "column",
  text: "#FAFAFA",
  backgroundImage: ` url(${img})`,
  borderRadius: " 0px 0px 0px 30px;",
  listItemBackground: "#262122e6",
  body: "linear-gradient(360deg,#1e2222  0%,#1e2222 61%, rgba(2,0,36,1) 100%)",
  footer: "#110b09",
  fill: "#00ceff",
  imageWidth: "264px, 360px",
  modal: "#262122"
};
