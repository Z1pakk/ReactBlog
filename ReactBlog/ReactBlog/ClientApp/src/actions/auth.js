import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});


export const login = credentials => dispatch =>
  api.user.login(credentials).then(res => {
    const token = res.token;
    localStorage.setItem("jwtToken", token);
    setAuthorizationToken(token);
    let jwtTokenDecode = jwt.decode(token);
    dispatch(
      userLoggedIn({
        email: jwtTokenDecode.email,
        isAdmin: jwtTokenDecode.isAdmin,
        isTeacher: jwtTokenDecode.isTeacher,
        isConfirmed: res.isConfirmed
      })
    );
  });
export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  dispatch(userLoggedOut());
};

export const confirmEmail=(userId,token)=>{
  return new Promise((resolve, reject) => {
    api.user.confirmEmail(userId,token).then(res => {
      resolve(res.data);
    })
      .catch(err => reject(err.response.data))
  });
  
}
