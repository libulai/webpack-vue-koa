var timer = null
var last = null
var deferTimer = null

let utils = {
    /**
     * 防抖
     * @param {Function} fn 
     * @param {Number} delay 
     */
    debounce: function (fn, delay) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    },

    /**
     * 节流
     * @param {Function} fn 
     * @param {Number} delay 
     */
    throttle: function (fn, delay) {
        let now = + new Date()
        if (last && now - last < delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function () {
                last = now
                fn.apply(this, arguments)
            }, delay)
        } else {
            last = now
            fn.apply(this, arguments)
        }
    }
}

export default utils