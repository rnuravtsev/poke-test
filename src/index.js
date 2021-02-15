import ReactDOM from "react-dom";
import App from "./components/app/app";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import { createAPI } from "./services/api";
import { composeWithDevTools } from "redux-devtools-extension";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App/>
      </ThemeProvider>
    </Provider>,
    document.querySelector(`#root`)
);
