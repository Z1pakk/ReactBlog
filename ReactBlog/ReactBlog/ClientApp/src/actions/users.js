import api from "../api";
import { userLoggedIn } from "./auth";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

export const signup = data  =>{
  return new Promise((resolve, reject) => {
    api.user.signup(data).then(res => {
      resolve();
    }).catch(err => reject(err))
  });
};

export const checkEmail = (email) => {
  return new Promise((resolve, reject) => {
    api.user.checkEmail(email).then(res => {
      resolve(res.data);
    })
      .catch(err => reject(new Error(err)))
  });
};
export const checkUserName = (userName) => {
  return new Promise((resolve, reject) => {
    api.user.checkUserName(userName).then(res => {
      resolve(res.data);
    })
      .catch(err => reject(new Error(err)))
  });
};
