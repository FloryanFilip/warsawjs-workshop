import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const req = require.context('./core/components', true, /component\.(ts|js|vue)$/i);

req.keys().map((key) => {
  const component = key.match(/[ \w-]+?(?=\.component\.(ts|js|vue))/);
  if (component) return Vue.component(component[0], req(key).default);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
