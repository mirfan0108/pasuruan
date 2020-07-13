const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterUnit {

    static getUnit(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/unit-work?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addUnit(req) {
        return axios.post(`${ENV}/unit-work`, req)
    }

    static modifyUnit(id, req) {
        return axios.put(`${ENV}/unit-work/${id}`, req)
    }

    static deleteUnit(id) {
        return axios.delete(`${ENV}/unit-work/${id}`)
    }

}

export default MasterUnit