import { FETCH_MENU } from "../actions/index";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MENU:
      return action.payload;
    default:
      return state;
  }
}
