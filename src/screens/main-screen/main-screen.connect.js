import { connect } from "react-redux";
import MainScreen from "./main-screen";

const mapStateToProps = (state) => ({
  isAppReady: state.APP.isAppReady,
});

export default connect(mapStateToProps)(MainScreen);
