const ENV       = process.env.BASE_API
import axios    from 'axios'

class Account {
    static signIn(form) {
        return axios.post(`${ENV}/user/token`, form)
    } 

}

export default Account