import api from "../api";
import { userLoggedIn } from "./auth";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

export const signup = data => dispatch =>
  api.user.signup(data).then(res => {
    const token = res;
    localStorage.setItem("jwtToken", token);
    setAuthorizationToken(token);
    let jwtTokenDecode = jwt.decode(token);
    dispatch(
      userLoggedIn({
        email: jwtTokenDecode.email,
        isAdmin: jwtTokenDecode.isAdmin,
        isTeacher: jwtTokenDecode.isTeacher
      })
    );
  });
