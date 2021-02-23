import styled from "styled-components";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";

const StyledDev = styled.address`
  color: ${(p) => p.theme.palette.primary.main};
`;

const Dev = (props) => {
  return (
    <StyledDev {...props}>
      <Grid
        container
        component={Link}
        spacing={1}
        justify="flex-end"
        alignItems="center"
        href="https://github.com/rnuravtsev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Grid item component={GitHubIcon} fontSize="large"/>
        <Grid item component="span">
          @rnuravtsev
        </Grid>
      </Grid>
    </StyledDev>
  );
};

export default Dev;
