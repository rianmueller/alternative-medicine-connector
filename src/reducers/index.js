//import actions here
import { TOGGLE_NAVIGATION } from '../actions'

const defaultState = {
  //initial states

  description: '',
  toggleNavigation: false,
}


let reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case statement

    case TOGGLE_NAVIGATION:
      return Object.assign({}, state, { toggleNavigation: true })
    default: return state;

  }
};

export default reducer;
