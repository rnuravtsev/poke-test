import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Sidebar from "../../commons/sidebar/sidebar";
import Nav from "../../nav/nav";
import Main from "../../commons/main/main";

const StyledMiddle = styled.div`
  min-height: 78vh;
`;

const Middle = (props) => {
  return (
    <Grid container component={StyledMiddle}>
      <Grid item xs={12} md={2} component={Sidebar}>
        <Nav />
      </Grid>
      <Grid item xs={12} md={10}>
        <Main>
          {props.children}
        </Main>
      </Grid>
    </Grid>
  );
};

Middle.propTypes = {
  children: PropTypes.node.isRequired
};

export default Middle;
