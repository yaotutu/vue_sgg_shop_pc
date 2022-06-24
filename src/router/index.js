import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SearchPage from "@/pages/SearchPage";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: HomePage,
      meta: { show: true },
    },
    {
      path: "/login",
      component: LoginPage,
      meta: { show: true },
    },
    {
      path: "/register",
      component: RegisterPage,
      meta: { show: false },
    },
    {
      path: "/search",
      component: SearchPage,
      meta: { show: false },
      name: "searchName",
    },
    // 重定向到首页
    {
      path: "/*",
      redirect: "/home",
    },
  ],
});
