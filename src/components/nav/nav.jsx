import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import ContactsIcon from "@material-ui/icons/Contacts";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Nav = () => {
  return (
    <List>
      <ListItem>
        <HomeIcon />
        <NavLink exact to={`/`}>
          Main
        </NavLink>
      </ListItem>
      <ListItem>
        <ListIcon />
        <NavLink exact to={`/pokemons`}>All Pokemons</NavLink>
      </ListItem>
      <ListItem>
        <ContactsIcon />
        <NavLink exact to={`/contacts`}>Contacts</NavLink>
      </ListItem>
    </List>
  );
};

export default Nav;
