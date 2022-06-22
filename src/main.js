import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";

// 引入组件
import TypeNav from "@/pages/home/TypeNav";
Vue.component("TypeNav", TypeNav);

Vue.config.productionTip = false;
//测试功能

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
}).$mount("#app");
