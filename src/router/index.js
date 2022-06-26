import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SearchPage from "@/pages/search";

//重写vue-router push函数，解决重复点击报错的问题
//NavigationDuplicated: Avoided redundant navigation to current location: "/?
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
      path: "/search/:keyword",
      component: SearchPage,
      meta: { show: false },
      name: "searchPageName",
    },
    // 重定向到首页
    {
      path: "/*",
      redirect: "/home",
    },
  ],
});
