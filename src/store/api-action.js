import { setPokemons } from "./action";

export const fetchPokemons = () => (dispatch, getState, api) =>
  api
    .get(`pokemon?limit=20`)
    .then(({ data: { results } }) => results)
    .then((results) => Promise.all(results.map((res) => api.get(res.url))))
    .then((results) => dispatch(setPokemons(results.map((res) => res.data))));
