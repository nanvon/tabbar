import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
// 封装request请求
import { request } from "./network/request";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

request({
  url: "/ip"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

/*axios({
  url: "http://123.207.32.32:8000/home/multidata",
  // url: "http://httpbin.org/ip",
  method: "GET"
}).then(res => {
  console.log(res);
});

axios({
  url: "http://123.207.32.32:8000/home/data",
  params: {
    type: "pop",
    page: 1
  },
  method: "GET"
}).then(res => {
  console.log(res);
});*/
