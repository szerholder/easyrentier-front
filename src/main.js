import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'


import App from './App.vue'


Vue.config.productionTip = false
//Vue.use(BootstrapVue)


new Vue({
  render: h => h(App),
}).$mount('#app')
