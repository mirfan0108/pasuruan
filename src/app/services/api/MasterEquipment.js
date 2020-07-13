const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterEquipment {

    static getEquipment(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/equipment?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addEquipment(req) {
        return axios.post(`${ENV}/master/equipment`, req)
    }

    static modifyEquipment(id, req) {
        return axios.put(`${ENV}/master/equipment/${id}`, req)
    }

    static deleteEquipment(id) {
        return axios.delete(`${ENV}/master/equipment/${id}`)
    }

    static getAll() {
        return axios.get(ENV+`/master/all/equipment`)
    }

}

export default MasterEquipment