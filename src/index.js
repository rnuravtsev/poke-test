import ReactDOM from "react-dom";
import App from "./components/app/app";
import GlobalStyles from "./styles/global-styles";
import {ThemeProvider} from "styled-components";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App name={`Ivan`} />
    </ThemeProvider>,
    document.querySelector(`#root`)
);
