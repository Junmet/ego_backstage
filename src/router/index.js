import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Query from "@/views/Query_commodity/Query.vue";
import Login from "@/views/Login/Login.vue";
import Specifications from "@/views/Specifications/Specifications.vue";
import Contents from "@/views/content_classification/contents.vue";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    // 路由重定向（进入home页面就会重定向到Query）
    redirect: { name: "Query" },
    // 嵌套路由
    children: [
      // 查询商品
      {
        path: "/query",
        name: "Query",
        component: Query,
        // meta: { isLogin: true },
      },
      // 规格参数
      {
        path: "/specifications",
        name: "Specifications",
        component: Specifications,
      },
      // 内容分类管理
      {
        path: "/contents",
        name: "Contents",
        component: Contents,
      },
    ],
  },
  // 登录注册
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  if (
    to.fullPath.indexOf("/query") === 0 ||
    to.fullPath.indexOf("/specifications") === 0 ||
    to.fullPath.indexOf("/contents") === 0
  ) {
    // 读取本地的消化比较大，所以选择读取vuex的
    // let token = sessionStorage.getItem("token");
    let token = store.state.userinfo.token;
    if (token) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
