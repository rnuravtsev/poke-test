import ReactDOM from "react-dom";
import App from "./components/app/app.connect";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import { createAPI } from "./services/api";
import { composeWithDevTools } from "redux-devtools-extension";
import { StylesProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme(theme);

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={defaultTheme}>
          <StyledThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </Provider>,
    document.querySelector(`#root`)
);
