import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login.vue'
// const Login = () => import('../pages/Login.vue')
import Main from '../pages/Main.vue'
import WebSkill from '../pages/WebSkill.vue'
import HomePage from '../pages/HomePage.vue'
import Debounce from '../pages/Debounce.vue'
import MVVM from '../pages/common/MVVM.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomePage
                },
                {
                    path: '/webSkill',
                    name: 'webSkill',
                    component: WebSkill
                },
                {
                    path: '/debounce',
                    name: 'debounce',
                    component: Debounce
                },
                {
                    path: '/MVVM',
                    name: 'MVVM',
                    component: MVVM,
                    // children: [
                    //     {
                    //         path: '/MVVM/',
                    //         name: 'MVVM',
                    //         component: MVVM,
                    //     }
                    // ]
                }
            ]
        },
        {
            path: '*', // 404
            name: '404',
            component: Login,
        }
    ]
})