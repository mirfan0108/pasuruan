const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterOpd {

    static getOpd(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/opd?page=${page}&limit=${limit}&search=${search}`)
    }
    static getOneOpd(id) {
        return axios.get(`${ENV}/opd/${id}`)
    } 

    static addOpd(req) {
        return axios.post(`${ENV}/opd`, req)
    }

    static modifyOpd(id, req) {
        return axios.put(`${ENV}/opd/${id}`, req)
    }

    static deleteOpd(id) {
        return axios.delete(`${ENV}/opd/${id}`)
    }

}

export default MasterOpd