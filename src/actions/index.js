export const TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION";
export const OPEN_REGISTER = "OPEN_REGISTER";
export const OPEN_LOGIN = "OPEN_LOGIN";
export const SUBMIT_REGISTER = "SUBMIT_REGISTER";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SUBMIT_LOGOUT = "SUBMIT_LOGOUT";

export const toggleNavigation = link => dispatch => {
  return dispatch({
    type: TOGGLE_NAVIGATION,
    payload: link
  });
};

export const actionsOpenRegister = () => dispatch => {
  console.log("Actions Open Register");
  return dispatch({
    type: OPEN_REGISTER,
    payload: "register"
  });
};

export const actionsOpenLogin = () => dispatch => {
  console.log("Actions Open Login");
  return dispatch({
    type: OPEN_LOGIN,
    payload: "login"
  });
};

export const actionsSubmitRegister = registerInfo => async dispatch => {
  let submission = {
    method: "POST",
    body: JSON.stringify(registerInfo),
    headers: {
      "Content-type": "application/json"
    }
  };
  return fetch("api/auth/register", submission)
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log("Results: ", results);
      return dispatch({ type: SUBMIT_REGISTER, payload: results });
    })
    .catch(err => {
      console.log("Error", err);
      return err;
    });
};

export const actionsSubmitLogin = loginInfo => async dispatch => {
  console.log("Actions Submit Login");
  let config = {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-type": "application/json"
    }
  };
  await fetch("/api/auth/login", config)
    .then(response => {
      console.log("actionsSubmitLogin got a response from the server");
      return response.json();
    })
    .then(results => {
      return dispatch({
        type: SUBMIT_LOGIN,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionsSubmitLogout = () => async dispatch => {
  console.log("Actions Submit Logout");
  await fetch("/api/auth/logout")
    .then(response => {
      console.log("actionsSubmitLogout got a response from server");
      response.json();
    })
    .then(results => {
      return dispatch({
        type: SUBMIT_LOGOUT,
        payload: "logout"
      });
    })
    .catch(err => {
      console.log(err);
    });
};
