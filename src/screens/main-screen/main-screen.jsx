import Grid from "@material-ui/core/Grid";
import { pokemonsType } from "../../common-prop-types";
import PokemonCard from "../../components/commons/pokemon-card/pokemon-card";

const MainScreen = (props) => {
  const { pokemons, isAppReady } = props;
  return (
    <Grid container spacing={3}>
      {pokemons.slice(0, 5).map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} loading={!isAppReady} />
        </Grid>
      ))}
    </Grid>
  );
};

MainScreen.propTypes = {
  pokemons: pokemonsType,
  isAppReady: PropTypes.bool.isRequired,
};

export default MainScreen;
