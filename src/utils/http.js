import axios from "axios";
import qs from "querystring";

// 错误信息处理函数
const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      // 请求次数的限制
      console.log("服务器请求限制");
      break;
    case 401:
      console.log("用户信息验证失败");
      break;
    case 403:
      console.log("请求被限制");
      break;
    case 404:
      console.log("客户端错误");
      break;
    default:
      console.log(other);
      break;
  }
};

// 创建一个实例
const axios = axios.create({
  timeout: 5000,
});

axios.defaults.baseURL = "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log(config);

    // 在发送请求之前做些什么
    if (config.method === "post") {
      config.data = qs.stringify(config, data);
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  // 成功
  (response) => {
    console.log(response);
    // 对响应数据做点什么
    if (response.status === 200) {
      Promise.resolve(response);
    } else {
      Promise.reject(response);
    }
    return response;
  },
  //失败
  (error) => {
    // 对响应错误做点什么
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data);
      return Promise.reject(response);
    } else {
      // response不存在，服务器没有响应
      console.log("请求被中断");
    }
  }
);
// 暴露
export default axios;
