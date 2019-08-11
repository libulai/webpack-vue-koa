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
            return await axios.post('/api/signUp', parmas)
        } catch (error) {
            throw error
        }
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
    }

    async post(obj) {
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // Object.keys(obj.data).forEach(item => {
        //     obj.data[item] = encodeURIComponent(encodeURIComponent(obj.data[item]))
        // })
        return await axios.post(obj.url, obj.data ? obj.data : {})
    }


}


export {
    Sign,
    Fetch
}