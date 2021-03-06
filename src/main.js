// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
// import App from './App'
import router from './router'
import store from "./store";
import Layout from './layout/index'
import axios from "axios";
Vue.prototype.axios = axios
// Vue.use(ElementUI);
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

router.afterEach(() => {
  if(document.getElementsByClassName("bottom").length>0){
    document.getElementsByClassName("bottom")[0].scrollTop = 0//回到顶部

  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
