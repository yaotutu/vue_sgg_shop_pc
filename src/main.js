import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
import store from "@/store";

import "@/mock/mockServe";

// 引入组件
import TypeNav from "@/components/TypeNav";
Vue.component("TypeNav", TypeNav);

Vue.config.productionTip = false;
//测试功能

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");

//测试功能区域
// import { reqGetSearchInfo } from "@/api";
//
// console.log("reqGetSearchInfo()", reqGetSearchInfo({}));
