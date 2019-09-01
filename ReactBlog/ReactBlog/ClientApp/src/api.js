import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth/login", credentials).then(res => res.data),
    signup: model =>
      axios.post("/api/auth/register", model).then(res => res.data),
    confirmEmail: (userId, code) =>
      axios.post(`/api/auth/verify/email/${userId}/${code}`).then(res => res.data),
    checkEmail:(email)=>
      axios.get(`/api/account/checkEmail/${email}`).then(res=>res),
    checkUserName:(userName)=>
      axios.get(`/api/account/checkUserName/${userName}`).then(res=>res)
  },
  posts:{
    getTop:countItems=>
      axios.get(`/api/posts/topPosts?countItems=${countItems}`).then(res=>res.data),
    getPosts:(page,countItems,author,tagId)=>
      axios.get(`/api/posts/mainPosts?page=${page}&countItems=${countItems}&authorUserName=${author}&tagId=${tagId}`).then(res=>res.data),
    getPost:(id)=>
      axios.get(`/api/posts/post/${id}`).then(res=>res.data),
  },
  authors:{
    getTop:(searchText,page,countItems)=>
      axios.get(`/api/authors/topAuthors?searchText=${searchText}&page=${page}&countItems=${countItems}`).then(res=>res.data),
    getAuthorInfo:(userName)=>
      axios.get(`/api/authors/author/${userName}`).then(res=>res.data),
  },
  tags:{
    getTop:(searchText,page,countItems)=>
      axios.get(`/api/tags/topTags?searchText=${searchText}&page=${page}&countItems=${countItems}`).then(res=>res.data),
    getTagInfo:(tagName)=>
      axios.get(`/api/tags/tag/${tagName}`).then(res=>res.data),
  }
};
