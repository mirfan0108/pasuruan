const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterInterest {

    static getInterest(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/interest?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addInterest(req) {
        return axios.post(`${ENV}/master/interest`, req)
    }

    static modifyInterest(id, req) {
        return axios.put(`${ENV}/master/interest/${id}`, req)
    }

    static deleteInterest(id) {
        return axios.delete(`${ENV}/master/interest/${id}`)
    }
    static getAll() {
        return axios.get(ENV+`/master/all/interest`)
    }

}

export default MasterInterest