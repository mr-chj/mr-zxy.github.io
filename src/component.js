import HelloWorld from "./components/HelloWorld.vue";
import z_content from "./components/z_content.vue";
import chj_yutang1 from "./components/chj_yutang1.vue";
export default {
  install(Vue) {
    Vue.component("HelloWorld", HelloWorld);
    Vue.component("z_content", z_content);
    Vue.component("chj_yutang1",chj_yutang1);
  }
};
