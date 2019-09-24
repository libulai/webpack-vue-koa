import axios from 'axios'

class Sign {

    //注册
    static async signIn(parmas) {
        try {
            return await axios.post('/api/signIn', parmas)
        } catch (error) {
            throw error
        }
    }

    //登录
    static async signUp(parmas) {
        try {
            const rs = await axios.post('/api/signUp', parmas)
            this.saveJWT(rs.token)
            return rs
        } catch (error) {
            throw error
        }
    }

    static saveJWT(t) {
        localStorage.setItem('z_token', t)
    }

}

class Fetch {
    constructor() {
        // 响应拦截
        axios.interceptors.response.use(response => {
            return response.data
        }, error => {
            return Promise.resolve(error.response)
        })
        
        // 请求拦截
        axios.interceptors.request.use(config => {
            const token = localStorage.getItem('z_token')
            config.headers.common['Authorization'] = 'Bearer ' + token
            return config
        })
    }

    async post(obj) {
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // Object.keys(obj.data).forEach(item => {
        //     obj.data[item] = encodeURIComponent(encodeURIComponent(obj.data[item]))
        // })
        let rs = await axios.post(obj.url, obj.data ? obj.data : {})
        // if(obj.onSuccess) obj.onSuccess = function() {
        //     obj.onSuccess.apply(this, rs)
        // }
        if (obj.onSuccess) obj.onSuccess(rs)
        else return rs
        
    }


}

export {
    Sign,
    Fetch
}

