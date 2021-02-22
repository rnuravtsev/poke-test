import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}
  body {
    min-width: 320px;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.palette.white}
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  .visually-hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
