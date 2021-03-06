import axios from 'axios'
import vue from '../index'

class Fetch {
    constructor() {

        // 响应拦截
        axios.interceptors.response.use(response => {
            // jwt 验证失败
            if (response.data.code === -1) {
                vue.$toast({
                    toastError: true,
                    errorText: 'jwt验证失败或过期，请重新登录',
                  })
                vue.$router.push('/')
            }
            return response.data
        }, error => {
            return Promise.resolve(error.response)
        })

        
        // 请求拦截
        axios.interceptors.request.use(config => {
            const token = localStorage.getItem('z_token')
            // const token = vue.$store.state.z_token
            config.headers.common['Authorization'] = 'Bearer ' + token
            return config
        })
    }

    async post(obj) {
        let rs = await axios.post(obj.url, obj.data ? obj.data : {})
        // if(obj.onSuccess) obj.onSuccess = function() {
        //     obj.onSuccess.apply(this, rs)
        // }
        if (obj.onSuccess) obj.onSuccess(rs)
        else return rs
        
    }


}


class Sign extends Fetch {
    constructor() {
        super()
    }

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
        // vue.$store.commit('SAVE_JWT', t)
    }

}

export {
    Sign,
    Fetch
}

