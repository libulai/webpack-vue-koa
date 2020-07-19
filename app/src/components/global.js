import Vue from 'vue'

const initComponents = function () {
    let comps = require.context('@/pages/common', false, /\.vue$/)

    comps.keys().forEach(item => {
        let newItem = item.toLowerCase().replace(/\.\//, '').replace(/\.\w+$/, '')
        let config = comps(item)
        Vue.component(newItem, config.default || config)
    })
}

export default initComponents