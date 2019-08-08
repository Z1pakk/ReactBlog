import { TOP_POSTS_GET } from "../types";
import api from "../api";
import jwt from "jsonwebtoken";


export const gettedTopPosts = (res) => ({
    type: TOP_POSTS_GET,
    topPosts:res
});

export const getTopPosts = (countItems) =>dispatch => {
    api.posts.getTop(countItems).then(res=>{
        dispatch(
            gettedTopPosts(res)
        )
    });
  };