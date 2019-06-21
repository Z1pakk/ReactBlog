import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

const initialState = {};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
