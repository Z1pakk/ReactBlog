import { combineReducers } from "redux";

import user from "./reducers/user";
import datas from "./reducers/datas";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    datas
  });
