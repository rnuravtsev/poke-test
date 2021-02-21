import { Grid } from "@material-ui/core";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";
import Logo from "../commons/logo/logo";
import Dev from "../commons/dev/dev";
import MobileMenu from "../commons/mobile-menu/mobile-menu";
import Middle from "../sections/middle/middle";

const BaseLayout = (props) => {
  return (
    <Grid container>
      <Grid
        item
        container
        justify="space-between"
        alignContent="center"
        xs={12}
        component={Header}
      >
        <Logo />
        <MobileMenu />
      </Grid>
      <Middle>
        {props.children}
      </Middle>
      <Grid
        container
        alignItems="center"
        component={Footer}
      >
        <Grid item xs={6}>
          <Logo />
        </Grid>
        <Grid item xs={6} component={Dev} />
      </Grid>
    </Grid>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
