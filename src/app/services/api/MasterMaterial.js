const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterMaterial {

    static getMaterial(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/material?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addMaterial(req) {
        return axios.post(`${ENV}/master/material`, req)
    }

    static modifyMaterial(id, req) {
        return axios.put(`${ENV}/master/material/${id}`, req)
    }

    static deleteMaterial(id) {
        return axios.delete(`${ENV}/master/material/${id}`)
    }

    static getAll() {
        return axios.get(ENV+`/master/all/material`)
    }

}

export default MasterMaterial