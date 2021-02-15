import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}
  html {
    box-sizing: border-box;
  }
  body {
    background-color: #ff2800
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
`;

export default GlobalStyles;
