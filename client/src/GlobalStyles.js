import { createGlobalStyle } from "styled-components";
import img from "../src/resources/camo.jpg";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  background-size: 100%;
	background-repeat: no-repeat;
  
  align-items: center;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.border};
  background-image: ${({ theme }) => theme.backgroundImage};

   
 
  transition: all 0.5s linear;
  body:before{
	content:'';
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: -1;

  transition: all 0.5s linear;

}
 
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
