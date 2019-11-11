import { createGlobalStyle } from "styled-components";
import img from "../src/resources/camo.jpg";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  align-items: center;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.border};
  background-image: ${({ theme }) => theme.backgroundImage};
  height: 95vh;
    margin: 0;
    
    padding: 0;
   
 
  transition: all 0.5s linear;
 
}
`;
/* body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
   
    transition: all 0.25s linear;
  }*/
