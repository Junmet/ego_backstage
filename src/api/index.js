import axios from "../utils/http";

const api = {
  getLogin(data) {
    return axios({
      method: "post",
      url: "/api/login",
      data,
    });
  },
  getSelect() {
    return axios({
      url: "http://iwenwiki.com/api/blueberrypai/getIndexInteresting.php",
    });
  },
};

export default api;
