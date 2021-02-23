import styled from "styled-components";
import Logo from "../../commons/logo/logo";
import MobileMenu from "../mobile-menu/mobile-menu";
import { Grid } from "@material-ui/core";

const StyledHeader = styled.header`
  grid-area: header;
  padding: 15px;
  background-color: ${(p) => p.theme.palette.grey.main};
`;

const Header = () => {
  return (
    <Grid
      item
      container
      justify="space-between"
      alignContent="center"
      xs={12}
      component={StyledHeader}
    >
      <Logo />
      <MobileMenu />
    </Grid>
  );
};

export default Header;
