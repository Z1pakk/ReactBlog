import { TOP_POSTS_GET,MAIN_POSTS_GET } from "../types";
import api from "../api";


export const gettedTopPosts = (res) => ({
    type: TOP_POSTS_GET,
    topPosts:res
});

export const gettedMainPosts = (res) => ({
    type: MAIN_POSTS_GET,
    data:res
});

export const getTopPosts = (countItems) => dispatch => {
    api.posts.getTop(countItems).then(res=>{
        dispatch(
            gettedTopPosts(res)
        )
    });
  };

export const getMainPosts = (page,countItems)  => {
    return new Promise((resolve, reject) => {
        api.posts.getPosts(page,countItems).then(res=>{
            resolve(res);
        }).
        catch(err=>reject(new Error("Error")))
    });
};
