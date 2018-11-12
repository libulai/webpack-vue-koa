import Vue from 'vue'
import App from './pages/App.vue'
import Router from 'vue-router'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
    el: "#root",
    Router,
    render: h => h(App)
})

// new Vue({
//     el: '#root',
//     router,
//     components: { App },
//     template: '<App/>'
// })