import axios from "axios";
//引入 nprogress
import nprogress from "nprogress";
// import nprogress css
import "nprogress/nprogress.css";
const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  () => {
    return Promise.reject(new Error("失败了"));
  }
);

export default requests;
