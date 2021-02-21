import { connect } from "react-redux";
import App from "./app";
import { initApplication } from "./actions/init-application";

const mapStateToProps = (state) => ({
  pokemons: state.DATA.pokemons,
  isAppReady: state.APP.isAppReady,
});

const mapDispatchToProps = (dispatch) => ({
  initApplication: () => dispatch(initApplication()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
