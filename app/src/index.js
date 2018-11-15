import Vue from 'vue'
import App from './pages/App.vue'
import router from './routers'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify)

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// new Vue({
//     el: "#root",
//     router,
//     render: h => h(App)
// })



new Vue({
    el: '#root',
    router,
    components: { App },
    template: '<App/>'
})