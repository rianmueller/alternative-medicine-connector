export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";

export const toggleNavigation = link => dispatch => {
  return dispatch({
    type: TOGGLE_NAVIGATION,
    payload: link
  })
}
