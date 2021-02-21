import { fetchPokemons } from "../../../store/api-action";
import { setAppReady } from "../../../store/action";

export const initApplication = () => (dispatch) => {
  dispatch(fetchPokemons())
    .then(() => dispatch(setAppReady()));
};
