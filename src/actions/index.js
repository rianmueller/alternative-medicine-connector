export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";
export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const LOAD_USER = "LOAD_USER";

export const toggleNavigation = link => dispatch => {
  return dispatch({
    type: TOGGLE_NAVIGATION,
    payload: link
  });
};

export const loadProductAsync = id => async dispatch => {
  fetch("/api/products/" + id)
    .then(res => {
      return res.json();
    })
    .then(product => {
      dispatch({
        type: LOAD_PRODUCT,
        payload: product
      });
    });
};

export const loadUserAsync = id => async dispatch => {
  fetch("/api/users/" + id)
    .then(res => {
      return res.json();
    })
    .then(user => {
      dispatch({
        type: LOAD_USER,
        payload: user
      });
    });
};
