import Vue from 'vue'
import App from './App.vue'
import '../src/utils/element-ui'
import vuetify from '@/utils/vuetify';
Vue.config.productionTip = false

import router from './router/index.js'
import store from '@/store/index.js'


new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app')
