import { createGlobalStyle } from "styled-components";
import img from "../src/resources/homescreen.jpg";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
/* background-image: url(${img}); */
background:#1E2222;

background-repeat: no-repeat;
  background-size: 100% 100%;
  margin:0px;
  width:100vw;
  height:100vh;
  
 
}
`;
