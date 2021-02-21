import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Loading from "../commons/loading/loading";
// import SkeletonApp from "../skeleton-app/skeleton-app";
import BaseLayout from "../base-layout/base-layout";
import MainScreen from "../../screens/main-screen/main-screen";
import PokemonsScreen from "../../screens/pokemons-screen/pokemons-screen";
import ContactsScreen from "../../screens/contacts-screen/contacts-screen";
import { pokemonsType } from "../../common-prop-types";

const App = (props) => {
  const { pokemons, isAppReady, initApplication } = props;
  React.useEffect(() => {
    initApplication();
  }, [initApplication]);

  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <MainScreen isAppReady={isAppReady} pokemons={pokemons} />
              )}
            />
          </Switch>
          <Switch>
            <Route exact path="/pokemons" component={PokemonsScreen} />
          </Switch>
          <Switch>
            <Route exact path="/contacts" component={ContactsScreen} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  pokemons: pokemonsType,
  isAppReady: PropTypes.bool.isRequired,
  initApplication: PropTypes.func.isRequired,
};

export default App;
