import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入Element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import NavBar from '@/components/common/NavBar'
Vue.component(NavBar.name, NavBar)

//引入全局CSS样式
import '../src/static/global/index.css'

import * as api from './restful/api'
console.log(api)
Vue.prototype.$http = api 
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
