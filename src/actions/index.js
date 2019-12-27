export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";
export const LOAD_PRODUCT = "LOAD_PRODUCT"

export const toggleNavigation = link => dispatch => {
  return dispatch({
    type: TOGGLE_NAVIGATION,
    payload: link
  })
}

export const loadProductAsync = (id) => async dispatch => {
  fetch("/api/products/" + id).then(res =>{
    return res.json()
  }).then(product => {
    dispatch({
      type: LOAD_PRODUCT,
      payload: product
    })
  }).catch(err => {
    console.log(err)
  })
}