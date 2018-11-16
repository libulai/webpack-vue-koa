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


export {
    Sign
}