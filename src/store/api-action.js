import { loadPokemons } from "./action";

export const fetchPokemons = () => (dispatch, getState, api) =>
  api.get(`pokemon?limit=20`).then(({ data }) => dispatch(loadPokemons(data)));
