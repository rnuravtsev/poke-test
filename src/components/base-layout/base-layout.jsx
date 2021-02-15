import { Grid } from "@material-ui/core";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";
import Logo from "../commons/logo/logo";
import Dev from "../commons/dev/dev";
import Sidebar from "../commons/sidebar/sidebar";
import Main from "../commons/main/main";
import Nav from "../nav/nav";

const BaseLayout = (props) => {
  return (
    <>
      <Header>
        <Grid container>
          <Grid item>
            <Logo />
          </Grid>
        </Grid>
      </Header>
      <Grid container>
        <Grid item>
          <Sidebar>
            <Nav />
          </Sidebar>
        </Grid>
        <Grid item>
          <Main>{props.children}</Main>
        </Grid>
      </Grid>
      <Footer>
        <Grid container>
          <Grid item xs={6}>
            <Logo />
          </Grid>
          <Grid item xs={6}>
            <Dev>
              <p>@rnuravtsev</p>
            </Dev>
          </Grid>
        </Grid>
      </Footer>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
