import { connect } from "react-redux";
import MainScreen from "./main-screen";

const mapStateToProps = (state) => ({
  isAppReady: state.APP.isAppReady,
  pokemons: state.DATA.pokemons
});

export default connect(mapStateToProps)(MainScreen);
