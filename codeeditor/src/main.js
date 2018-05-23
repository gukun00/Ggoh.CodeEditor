import Vue from 'vue'
import App from './App.vue'
import areaSelect from './index'

Vue.use(areaSelect)

new Vue({
  el: '#app',
  render: h => h(App)
})
