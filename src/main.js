import Vue from "vue";
import App from "./App.vue";
import { Plugin as FragmentPlugin } from "vue-fragment";

Vue.config.productionTip = false;

Vue.use(FragmentPlugin);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
