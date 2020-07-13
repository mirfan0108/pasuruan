const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterPower {

    static getPower(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/powertype?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addPower(req) {
        return axios.post(`${ENV}/master/powertype`, req)
    }

    static modifyPower(id, req) {
        return axios.put(`${ENV}/master/powertype/${id}`, req)
    }

    static deletePower(id) {
        return axios.delete(`${ENV}/master/powertype/${id}`)
    }

    static getAll() {
        return axios.get(ENV+`/master/all/powertype`)
    }

}

export default MasterPower