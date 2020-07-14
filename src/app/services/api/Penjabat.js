const ENV       = process.env.BASE_API
import axios    from 'axios'

class Penjabat {


    static addPenjabat(req) {
        return axios.post(`${ENV}/penjabat/position`, req)
    }

    static modifyPenjabat(id, req) {
        return axios.put(`${ENV}/penjabat/position/${id}`, req)
    }

    static deletePenjabat(id) {
        return axios.delete(`${ENV}/penjabat/position/${id}`)
    }
    static getAll(id) {
        return axios.get(ENV+`/penjabat/position/id/${id}`)
    }

}

export default Penjabat