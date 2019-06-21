import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth/login", credentials).then(res => res.data)
  }
};
