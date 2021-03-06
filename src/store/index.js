import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: {
      username: "",
      token: "",
    },
  },
  mutations: {
    setUserInfo(state, userinfo) {
      state.userinfo = userinfo;
    },
  },
  actions: {
    setUserInfoActions({ commit }, userinfo) {
      commit("setUserInfo", userinfo);
    },
  },
  modules: {},
});
