import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Logo from "../../commons/logo/logo";
import Dev from "../../commons/dev/dev";

const StyledFooter = styled.footer`
  grid-area: footer;
  padding: 15px;
  background-color: ${(p) => p.theme.palette.grey.main};
`;

const Footer = () => {
  return (
    <Grid container alignItems="center" component={StyledFooter}>
      <Grid item xs={6}>
        <Logo />
      </Grid>
      <Grid item xs={6} component={Dev} />
    </Grid>
  );
};

export default Footer;
