import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import ContactsIcon from "@material-ui/icons/Contacts";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledNav = styled.nav`
  & .nav__text--custom {
    display: none;
  }
  @media ${(p) => p.theme.media.tablet} {
    & .MuiButton-root {
      font-size: 10px;
    }
  }
  @media ${(p) => p.theme.media.laptop} {
    & .MuiButton-root {
      font-size: 12px;
    }
    & .nav__text--custom {
      display: inline;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <List>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            exact
            to={`/`}
            startIcon={<HomeIcon />}
            fullWidth
          >
            Main
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            exact
            to={`/pokemons`}
            startIcon={<ListIcon />}
            fullWidth
          >
            <span className="nav__text nav__text--custom">All</span>&nbsp;Pokemons
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            exact
            to={`/contacts`}
            startIcon={<ContactsIcon />}
            fullWidth
          >
            Contacts
          </Button>
        </ListItem>
      </List>
    </StyledNav>
  );
};

export default Nav;
