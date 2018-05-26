// import vueAreaSelect from './components/vue-area-select.vue' //引入组件
// const areaSelect = {
//   install(Vue, options) {
//     Vue.component(vueAreaSelect.name, vueAreaSelect) //全局组件
//   }
// }

// export default areaSelect //导出

import vueCodeEditor from './components/vue-code-editor.vue' //引入组件
const codeEditor = {
  install(Vue, options) {
    Vue.component(vueCodeEditor.name, vueCodeEditor) //全局组件
  }
}

export default codeEditor //导出
