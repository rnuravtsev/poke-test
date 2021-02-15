import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainScreen from "../../screens/main-screen/main-screen";
import ContactsScreen from "../../screens/contacts-screen/contacts-screen";
import BaseLayout from "../base-layout/base-layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={MainScreen} />
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
