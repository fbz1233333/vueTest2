// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ViewUI from 'view-design'
import '../my-theme/index.less'

import character from "./store/character";
import map from "./store/map";

Vue.use(Vuex)
Vue.use(ViewUI)
Vue.config.productionTip = false

const store=new Vuex.Store({
  modules:{
    character,map
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  render: h=>h(App)
})
