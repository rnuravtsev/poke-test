import { Switch, Route, BrowserRouter } from "react-router-dom";
import BaseLayout from "../base-layout/base-layout";
import MainScreen from "../../screens/main-screen/main-screen";
import PokemonsScreen from "../../screens/pokemons-screen/pokemons-screen";
import ContactsScreen from "../../screens/contacts-screen/contacts-screen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={MainScreen} />
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

export default App;
