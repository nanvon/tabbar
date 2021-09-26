<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" alt="" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" alt="" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" alt="" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" alt="" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/index'
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
