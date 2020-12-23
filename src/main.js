import Vue from 'vue'
import App from './App.vue'

// 完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入router对象模块
import router from './router'

// 声明使用element插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
