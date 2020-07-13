const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterTalent {

    static getTalent(page = 1, limit = 10, search = '') {
        return axios.get(`${ENV}/master/talent?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addTalent(req) {
        return axios.post(`${ENV}/master/talent`, req)
    }

    static modifyTalent(id, req) {
        return axios.put(`${ENV}/master/talent/${id}`, req)
    }

    static deleteTalent(id) {
        return axios.delete(`${ENV}/master/talent/${id}`)
    }

    static getAll() {
        return axios.get(ENV+`/master/all/talent`)
    }
    

}

export default MasterTalent