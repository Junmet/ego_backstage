import axios from "../utils/http";

const api = {
  getLogin(data) {
    return axios({
      method: "post",
      url: "/login",
      data,
    });
  },
};

export default api;
