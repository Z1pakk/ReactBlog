import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth/login", credentials).then(res => res.data),
    signup: model =>
      axios.post("/api/auth/register", model).then(res => res.data),
    confirmEmail: (userId, code) =>
      axios.post(`/verify/email/${userId}/${code}`).then(res => res.data)
  },
  posts:{
    getTop:countItems=>
      axios.get(`/api/posts/topPosts?countItems=${countItems}`).then(res=>res.data),
    getPosts:(page,countItems)=>
      axios.get(`/api/posts/mainPosts?page=${page}&countItems=${countItems}`).then(res=>res.data)
  }
};
