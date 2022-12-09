import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import '@/assets/fonts/iconfont'
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
