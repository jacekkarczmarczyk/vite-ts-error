import Vue, { h } from 'vue';
import router from '@/router';
import App from '@/App.vue';

Vue.config.productionTip = false;

new Vue({
  name: 'RootComponent',
  router,
  render: () => h(App),
}).$mount('#app');
