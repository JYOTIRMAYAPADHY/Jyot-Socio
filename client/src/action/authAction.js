import { GET_ERRORS } from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

//Register user
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) //Redirecting to login page using redux
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      const { token } = res.data;
      //set token
      localStorage.setItem("jwtToken", token);
      //set token to auth reader
      setAuthToken(token);
      //decode token
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Set login user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Set user logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken"); //removing the token fro loalStorage
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
