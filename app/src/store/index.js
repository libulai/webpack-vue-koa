import Vue from 'vue'
import Vuex from 'vuex'
// vuex 持久化
import createPersistedState from "vuex-persistedstate"

const SAVE_JWT = 'SAVE_JWT'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        z_token: ''
    },
    mutations: {
        [SAVE_JWT](state, t) {
            this.dispatch(SAVE_JWT, t)
        }
    },
    actions: {
        [SAVE_JWT](state, t) {
            this.state.z_token = t
        }
    },
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
    // getters: {
    //     doList: state => {
    //         return state.z_token = 4
    //     }
    // }
})