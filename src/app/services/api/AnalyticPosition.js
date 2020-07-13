const ENV       = process.env.BASE_API
import axios    from 'axios'

class Anaylytic {
    static readyToVerify(req) {
        return axios.put(ENV + `/anjab/verify/${req.id}`, req)
    }
    static fetchAnjab(page = 1, limit = 10, opd_id, search = "") {
        return axios.get(ENV + `/anjab/opd/${opd_id}?page=${page}&search=${search}`)
    }
    static getDetail(id) {
        return axios.get(ENV+ `/anjab-detail/${id}`)
    }

    static getListPositionBaseOnOpd(id) {
        return axios.get(ENV + "/analytic/unpublished-anajb/list-position/opd/" + id)
    }

    static postAnjab(req) {
        return axios.post(ENV+"/anjab", req)
    }

}

export default Anaylytic