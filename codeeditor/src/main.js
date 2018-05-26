import Vue from 'vue'
import App from './App.vue'
import codeEditor from './index'

Vue.use(codeEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})
