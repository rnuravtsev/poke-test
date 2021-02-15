import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import ContactsIcon from "@material-ui/icons/Contacts";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Nav = () => {
  return (
    <List component="nav">
      <ListItem component={NavLink} exact to={`/`}>
        <HomeIcon />
        Main
      </ListItem>
      <ListItem component={NavLink} exact to={`/pokemons`}>
        <ListIcon />
        All Pokemons
      </ListItem>
      <ListItem component={NavLink} exact to={`/contacts`}>
        <ContactsIcon />
        Contacts
      </ListItem>
    </List>
  );
};

export default Nav;
