import { Grid } from "@material-ui/core";
import Header from "../sections/header/header";
import Footer from "../sections/footer/footer";
import Middle from "../sections/middle/middle";
import styled from "styled-components";

const StyledBaseLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "middle"
    "footer";
  grid-template-rows: 100px 1fr 100px;
  min-height: 100vh;
`;

const BaseLayout = (props) => {
  return (
    <Grid container component={StyledBaseLayout}>
      <Header/>
      <Middle>
        {props.children}
      </Middle>
      <Footer/>
    </Grid>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
