import Vue from 'vue'
import App from './App.vue'
import paykeyboard from './lib/index'
//import vuePayKeyboard from './lib/vue-codeeditor.vue' // 导入组件 

Vue.use(paykeyboard);

new Vue({
  el: '#app',
  render: h => h(App)
})