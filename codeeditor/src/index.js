import vueAreaSelect from './components/vue-area-select.vue' //引入组件
const areaSelect = {
  install(Vue, options) {
    Vue.component(vueAreaSelect.name, vueAreaSelect) //全局组件
  }
}

export default areaSelect //导出
