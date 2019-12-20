import Vue from "vue";
//移动端适配
import "amfe-flexible/index.js";
import axios from "./https.js";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

//上拉加载
// import MeScroll from 'enscroll.js'
// import 'mescroll.js/mescroll.min.css'
import Vant from 'vant';
import 'vant/lib/index.css';


import App from "./App.vue";
import router from "./router";
import store from "./store";
import component from "./component.js";

Vue.use(Vant);
Vue.use(component);
Vue.use(MintUI);
Vue.prototype.$axios = axios;
Vue.prototype.bus = new Vue();
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
