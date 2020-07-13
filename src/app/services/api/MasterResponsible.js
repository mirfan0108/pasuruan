const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterResponsible {

    static getResponsible(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/responsibility?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addResponsible(req) {
        return axios.post(`${ENV}/master/responsibility`, req)
    }

    static modifyResponsible(id, req) {
        return axios.put(`${ENV}/master/responsibility/${id}`, req)
    }

    static deleteResponsible(id) {
        return axios.delete(`${ENV}/master/responsibility/${id}`)
    }
    static getAll() {
        return axios.get(ENV+`/master/all/responsibility`)
    }

}

export default MasterResponsible