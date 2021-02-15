import { extend } from "../../../utils/utils";
import { ActionType } from "../../action";

const initialState = {
  pokemons: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POKEMONS:
      return extend(state, {
        pokemons: action.payload,
      });

    default:
      return state;
  }
};

export { appData };
