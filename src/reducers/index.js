//import actions here
import { TOGGLE_NAVIGATION, SUBMIT_REGISTER } from "../actions";

const defaultState = {
  //initial states

  description: "",
  toggleNavigation: false
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case statement

    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, { toggleNavigation: true });
    default:
      return state;
    case SUBMIT_REGISTER:
      return state;
  }
};

export default reducer;
