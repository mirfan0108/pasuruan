const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterAuthority {

    static getAuthority(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/authority?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addAuthority(req) {
        return axios.post(`${ENV}/master/authority`, req)
    }

    static modifyAuthority(id, req) {
        return axios.put(`${ENV}/master/authority/${id}`, req)
    }

    static deleteAuthority(id) {
        return axios.delete(`${ENV}/master/authority/${id}`)
    }
    static getAll() {
        return axios.get(ENV+`/master/all/authority`)
    }
    

}

export default MasterAuthority