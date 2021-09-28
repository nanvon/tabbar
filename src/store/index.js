import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1、安装插件
Vue.use(Vuex);

// 2、创建对象
const state = {
  counter: 1
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
});

// 3、导出store对象
export default store;
