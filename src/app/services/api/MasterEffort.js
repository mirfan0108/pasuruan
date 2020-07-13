const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterEffort {

    static getEffort(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/effort?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addEffort(req) {
        return axios.post(`${ENV}/master/effort`, req)
    }

    static modifyEffort(id, req) {
        return axios.put(`${ENV}/master/effort/${id}`, req)
    }

    static deleteEffort(id) {
        return axios.delete(`${ENV}/master/effort/${id}`)
    }
    static getAll() {
        return axios.get(ENV+`/master/all/effort`)
    }

}

export default MasterEffort