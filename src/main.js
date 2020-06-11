import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element";
import "./assets/common.css";
import api from "./api";

Vue.prototype.$api = api;

Vue.config.productionTip = false;

// 给Vuex赋值（为了解决Vuex刷新数据丢失）
if (sessionStorage.getItem("token") && sessionStorage.getItem("username")) {
  store.dispatch("setUserInfoActions", {
    token: sessionStorage.getItem("token"),
    username: sessionStorage.getItem("username"),
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
