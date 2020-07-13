const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterTemperament {

    static getTemperament(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/temperament?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addTemperament(req) {
        return axios.post(`${ENV}/master/temperament`, req)
    }

    static modifyTemperament(id, req) {
        return axios.put(`${ENV}/master/temperament/${id}`, req)
    }

    static deleteTemperament(id) {
        return axios.delete(`${ENV}/master/temperament/${id}`)
    }

    static getAll() {
        return axios.get(ENV+`/master/all/temperament`)
    }

}

export default MasterTemperament