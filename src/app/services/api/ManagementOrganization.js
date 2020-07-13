const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterOrganization {

    static getOrganization(page = 1, limit = 10, search = '', id) {
        return axios.get(`${ENV}/organization/opd/${id}?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addOrganization(req) {
        return axios.post(`${ENV}/organization`, req)
    }

    static modifyOrganization(id, req) {
        return axios.put(`${ENV}/organization/${id}`, req)
    }

    static deleteOrganization(id) {
        return axios.delete(`${ENV}/organization/${id}`)
    }

}

export default MasterOrganization