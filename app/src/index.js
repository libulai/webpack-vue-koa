import Vue from 'vue'
import App from './pages/App.vue'
import router from './routers'
import Vuetify from 'vuetify'
import componets from '@/utils/componets'
import echarts from 'echarts'
import store from './store'
import { Fetch } from '@/api/fetch'

import "vuetify/dist/vuetify.min.css" //vuetify css
import 'material-design-icons-iconfont/dist/material-design-icons.css' //vuetity icon

Vue.use(Vuetify)

//把toast 绑定在全局
Vue.prototype.$toast = componets.toast 

Vue.prototype.$echarts = echarts

Vue.prototype.$fetch = new Fetch()

Vue.prototype.$store = store

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

export default new Vue({
    el: "#root",
    router,
    store,
    render: h => h(App)
})