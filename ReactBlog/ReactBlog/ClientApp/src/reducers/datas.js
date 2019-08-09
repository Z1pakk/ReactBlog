import { TOP_POSTS_GET, MAIN_POSTS_GET } from "../types";

const initialState = {
    topPosts:[],
    posts:[]
};

export default function datas(state = initialState, action = {}) {
  switch (action.type) {
    case TOP_POSTS_GET:
      return {
          ...state,
          topPosts:action.topPosts
      }
    case MAIN_POSTS_GET:
      return {
          ...state,
          posts:action.data
      }
    default:
      return state;
  }
}
