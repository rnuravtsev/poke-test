export const ActionType = {
  LOAD_POKEMONS: `LOAD_POKEMONS`,
  SET_APP_READY: `SET_APP_READY`
};

export const loadPokemons = (pokemons) => ({
  type: ActionType.LOAD_POKEMONS,
  payload: pokemons
});

export const setAppReady = () => ({
  type: ActionType.SET_APP_READY
});
