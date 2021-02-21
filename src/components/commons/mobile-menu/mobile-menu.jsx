import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import ContactsIcon from "@material-ui/icons/Contacts";

const StyledMobileMenu = styled.nav`
  @media ${(p) => p.theme.media.tablet} {
    display: none;
  }
`;

const MobileMenu = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const handleClick = (evt) => {
    setActiveItem(evt.currentTarget);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  return (
    <StyledMobileMenu>
      <IconButton aria-controls="site-menu" onClick={handleClick}>
        <MenuIcon
          color="primary"
        />
      </IconButton>
      <Menu
        anchorEl={activeItem}
        open={Boolean(activeItem)}
        onClick={handleClose}
      >
        <MenuItem component={NavLink} exact to={`/`}>
          <HomeIcon
            fontSize="small"
          />
          Main
        </MenuItem>
        <MenuItem component={NavLink} exact to={`/pokemons`}>
          <ListIcon
            fontSize="small"
          />
          All Pokemons
        </MenuItem>
        <MenuItem component={NavLink} exact to={`/contacts`}>
          <ContactsIcon
            fontSize="small"
          />
          Contacts
        </MenuItem>
      </Menu>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
