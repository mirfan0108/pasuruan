const ENV       = process.env.BASE_API
import axios    from 'axios'

class MasterPosition {

    static getPosition(page = 1, limit = 10, search = '', id) {
        return axios.get(`${ENV}/position/opd/${id}?page=${page}&limit=${limit}&search=${search}`)
    } 

    static addPosition(req) {
        return axios.post(`${ENV}/position`, req)
    }

    static modifyPosition(id, req) {
        return axios.put(`${ENV}/position/${id}`, req)
    }

    static deletePosition(id) {
        return axios.delete(`${ENV}/position/${id}`)
    }

    static getListByOpd(id, currentPage, search = "") {
        return axios.get(ENV+ "/position/opd/" + id +"?page="+currentPage+"&search="+search)
    }
    static getAllPositionOpd(id){
        return axios.get(ENV+`/position/all/${id}`)
    }

}

export default MasterPosition