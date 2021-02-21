export const ActionType = {
  SET_POKEMONS: `SET_POKEMONS`,
  SET_APP_READY: `SET_APP_READY`
};

export const setPokemons = (pokemons) => ({
  type: ActionType.SET_POKEMONS,
  payload: pokemons
});

export const setAppReady = () => ({
  type: ActionType.SET_APP_READY
});
