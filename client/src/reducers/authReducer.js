import { SET_CURRENT_USER } from "../action/types";
import isEmpty from "../validation/is_Empty";

const intialState = {
  isAuthenticated: false,
  user: {},
};
export default function (state = intialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
