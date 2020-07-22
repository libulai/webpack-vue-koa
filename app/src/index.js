import Vue from 'vue'
import App from './pages/App.vue'
import router from './routers'
import Vuetify from 'vuetify'
import componets from '@/utils/componets'
import echarts from 'echarts'
import initComponents from '@/components/global'
import { Fetch } from '@/api/fetch'
// import store from './store'

import "vuetify/dist/vuetify.min.css" //vuetify css
import 'material-design-icons-iconfont/dist/material-design-icons.css' //vuetity icon

Vue.use(Vuetify)

initComponents(); // 全局注册组件

Vue.prototype.$toast = componets.toast

Vue.prototype.$echarts = echarts

Vue.prototype.$fetch = new Fetch()

// Vue.prototype.$store = store

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

export default new Vue({
    el: "#root",
    router,
    // store,
    render: h => h(App)
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // ...
    next()
    console.log(to, from)
})