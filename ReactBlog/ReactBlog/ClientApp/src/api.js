import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth/login", credentials).then(res => res.data),
    signup: model =>
      axios.post("/api/auth/register", model).then(res => res.data)
  }
};
