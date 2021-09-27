import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/index");
const Category = () => import("../views/category/index");
const Cart = () => import("../views/cart/index");
const Profile = () => import("../views/profile/index");

// 1、安装插件
Vue.use(VueRouter);

// 2、创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

// 3、导出router
export default router;
