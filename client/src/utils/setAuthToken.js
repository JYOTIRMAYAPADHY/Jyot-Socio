import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Applying token to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete the auth
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
