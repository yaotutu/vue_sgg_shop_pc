<template>
  <div id="app">
    <header-component />
    <router-view></router-view>
    <!-- 在登录注册时隐藏footer,在首页和搜索时显示footer组件 -->
    <!-- <footer-component
      v-show="$route.path == '/home' || $route.path == '/search'"
    /> -->
    <footer-component v-show="$route.meta.show" />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

<style></style>
